import React from 'react';
// import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

import { FaTruckMoving, FaCarAlt, FaMotorcycle } from 'react-icons/fa';
import { GiFishingBoat } from 'react-icons/gi';

const DUMMY_Fruits = [
  {
    name: 'Orange',
    color: 'bg-orange-500',
    score: 5,
  },
  {
    name: 'Apple',
    color: 'bg-red-500',
    score: 3,
  },
  { name: 'Banana', color: 'bg-yellow-400', score: 1 },
  {
    name: 'Lime',
    color: 'bg-green-400',
    score: 4,
  },
];

const DUMMY_Vehicles = [
  { name: 'Truck', price: 15000, disacount: 0.1, image: <FaTruckMoving /> },
  { name: 'Car', price: 25000, disacount: 2, image: <FaCarAlt /> },
  { name: 'Boat', price: 35000, disacount: 0.5, image: <GiFishingBoat /> },
  { name: 'Motorcycle', price: 5400, disacount: 0.7, image: <FaMotorcycle /> },
];

const config = [
  {
    label: 'Name',
    render: fruit => fruit.name,
    sortValue: fruit => fruit.name,
  },
  {
    label: 'Color',
    render: fruit => <div className={`p-3 m-2 ${fruit.color}`} />,
  },
  {
    label: 'Favourite',
    render: fruit => fruit.favourite,
  },
  {
    label: 'Score',
    render: fruit => fruit.score,
    sortValue: fruit => fruit.score,
    // header: () => <th className="bg-red-500">Score</th>,
  },
  {
    label: 'Score Squared',
    render: fruit => fruit.score ** 2,
    sortValue: fruit => fruit.score ** 2,
    // header: () => <th className="bg-red-500">Score</th>,
  },
];

const keyFn = fruit => {
  return fruit.name;
};
const TablePage = () => {
  return (
    <div>
      <SortableTable data={DUMMY_Fruits} config={config} keyFn={keyFn} />
      {/* <Table data={DUMMY_Vehicles} /> */}
    </div>
  );
};

export default TablePage;
