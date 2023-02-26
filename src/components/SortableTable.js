import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import { useSort } from '../hooks/use-sort';

const SortableTable = props => {
  const { data, config } = props;
  const { sortOrder, sortBy, sortedData, setSort } = useSort(data, config);

  const updatedConfig = config.map(column => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-200"
          onClick={() => setSort(column.label)}
        >
          <div className="flex items-center mr-3">
            {getIcons(column.label, sortOrder, sortBy)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
};

const getIcons = (label, sortOrder, sortBy) => {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (!sortOrder) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
};

export default SortableTable;
