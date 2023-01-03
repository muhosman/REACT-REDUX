import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const textStyle =
    "2xl:text-base xl:text-sm text-xs text-center px-2 py-3 border-b";
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return (
      <th className={`font-bold uppercase ${textStyle}`} key={column.label}>
        {column.label}
      </th>
    );
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className={` ${textStyle} font-medium   `} key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="odd:bg-slate-200 bg-transparent" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className=" min-w-full divide-y">
      <thead className="text-center border-b">
        <tr className="">{renderedHeaders}</tr>
      </thead>
      <tbody className=" relative">{renderedRows}</tbody>
    </table>
  );
}

export default Table;
