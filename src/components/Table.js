import React, { Fragment } from 'react';

const Table = ({ data, config, keyFn }) => {
  const renderedHeaders = config.map(column => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map(dataRow => {
    const renderedCells = config.map(column => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(dataRow)}
        </td>
      );
    });

    return (
      <tr className="border-b-2" key={keyFn(dataRow)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto my-5 mx-2 border-spacing-2 w-full">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;

/*
import React from 'react';

const Table = ({ data }) => {
  const headTitle = data.map((row, index) => {
    if (index > row.length - 1) return null;
    const firstLetter = String(Object.keys(row)[index])
      .slice(0, 1)
      .toUpperCase();
    const titleHead =
      firstLetter +
      String(Object.keys(row)[index]).slice(1).replaceAll('_', ' ');
    return (
      <th className="border border-slate-600" key={row.name}>
        {titleHead}
      </th>
    );
  });
  return (
    <table className="my-5 mx-2 table-auto border-spacing-2 w-full">
      <thead>
        <tr className="border-b-2">{headTitle}</tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          const tds = [];
          for (const cell in row) {
            let cellContent = row[cell];
            console.log('row[cell]: ', row[cell]);
            if (row[cell] === row?.color) {
              cellContent = <div className={`p-3 m-2 ${row[cell]}`}></div>;

              tds.push(
                <td className="border border-slate-700">{cellContent}</td>
              );
            } else {
              tds.push(
                <td className="p-3 border border-slate-700 items-center">
                  {cellContent}
                </td>
              );
            }
          }
          return <tr className="border-b text-center">{tds}</tr>;
        })}
      </tbody>
    </table>
  );
};

export default Table;

*/
