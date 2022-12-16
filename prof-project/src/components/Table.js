import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return (
      <th className="text-center px-5 py-4 border-b" key={column.label}>
        {column.label}
      </th>
    );
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="px-5 text-center border-b " key={column.label}>
          <div className="">{column.render(rowData)}</div>
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
    <table className=" table-auto w-full border-solid">
      <thead className="text-sm text-center px-5 py-4 border-b">
        <tr className="">{renderedHeaders}</tr>
      </thead>
      <tbody className="">{renderedRows}</tbody>
    </table>
  );
}

export default Table;
