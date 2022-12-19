import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return (
      <th
        className="text-xs font-bold text-center px-6 py-3 border-b uppercase"
        key={column.label}
      >
        {column.label}
      </th>
    );
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td
          className="text-center px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap border-b "
          key={column.label}
        >
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="odd:bg-orange-50 bg-transparent" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className=" min-w-full divide-y">
      <thead className="text-sm text-center px-5 py-4 border-b">
        <tr className="">{renderedHeaders}</tr>
      </thead>
      <tbody className="">{renderedRows}</tbody>
    </table>
  );
}

export default Table;
