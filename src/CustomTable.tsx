import React from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  useTable,
  HeaderGroup,
  TableOptions,
  RowPropGetter,
  CellPropGetter,
  TableRowProps,
  TableCellProps,
} from "react-table";

const useStyles = makeStyles({
  tableHead: {
    backgroundColor: "#f5f6f6",
  },
});

// Create a default prop getter
const defaultPropGetter = () => ({ key: "" });

interface TableProps<D extends object> extends TableOptions<D> {
  getRowProps?: (propGetter?: RowPropGetter<D>) => TableRowProps;
  getCellProps?: (propGetter?: CellPropGetter<D>) => TableCellProps;
}

function CustomTable<D extends object>({
  columns,
  data = [],
  getRowProps = defaultPropGetter,
  getCellProps = defaultPropGetter,
}: TableProps<D>) {
  const classes = useStyles();
  const { getTableProps, headerGroups, rows, prepareRow } = useTable<D>({
    columns,
    data,
  });
  // Render the UI for your table
  return (
    <MuiTable {...getTableProps()}>
      <TableHead className={classes.tableHead}>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell {...column.getHeaderProps()}>
                {column.render("Header")}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.length ? (
          rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps(getRowProps())}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps(getCellProps())}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })
        ) : (
          <TableRow>
            <TableCell
              align="center"
              colSpan={columns.length}
              style={{ color: "#a8aab1" }}
            >
              내용이 없습니다.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </MuiTable>
  );
}

export default CustomTable;
