import * as React from "react";
import {
  ColumnDef,
  SortingState,
  getSortedRowModel,
  flexRender,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  Row,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { DataTablePagination } from "./pagination";
import { DataTableViewOptions } from "./column-toggle";
import { SortHeader } from "./sort-header";
import { InputFilter, OptionT, SelectFilter } from "./filter-fields";

interface DataTableProps<TData, TValue> {
  columns: TDataTableColumn<TData, TValue>[];
  data: TData[];
}

export enum FilterTypeEnums {
  Input = "input",
  Select = "select",
}

export interface TDataTableColumn<TData, TValue> {
  field: string;
  title: string;
  headerStyle?: string;
  cellStyle?: string;
  sort?: boolean;
  renderCell?: ({ row }: { row: Row<TData> }) => React.ReactNode;
  filterType?: FilterTypeEnums | undefined;
  filterOptions?: OptionT[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [tableColumns, setTableColumns] = React.useState<
    ColumnDef<TData, TValue>[]
  >([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  React.useEffect(() => {
    getColumns();
  }, []);

  const renderFilter = (
    type: FilterTypeEnums | undefined,
    field: string,
    filterOptions: OptionT[] = []
  ) => {
    switch (type) {
      case FilterTypeEnums.Input:
        return <InputFilter table={table} filterField={field} />;
      case FilterTypeEnums.Select:
        return (
          <SelectFilter
            table={table}
            filterField={field}
            options={filterOptions}
          />
        );
      default:
        return <></>;
    }
  };

  const getColumns = () => {
    const _tableColumns: ColumnDef<TData, TValue>[] = columns.map((col) => {
      return {
        accessorKey: col.field,
        header: ({ column }) => {
          return col.sort ? (
            <div className="mt-2 flex flex-col justify-between">
              <SortHeader
                className={col.headerStyle}
                column={column}
                title={col.title}
              />
              {/* {col.filterType &&
                renderFilter(col.filterType, col.field, col.filterOptions)} */}
            </div>
          ) : (
            <div className="mt-2 flex flex-col justify-between">
              <div className={col.headerStyle}>{col.title}</div>
              {/* {col.filterType &&
                renderFilter(col.filterType, col.field, col.filterOptions)} */}
            </div>
          );
        },
        cell: ({ row }) => {
          return col?.renderCell ? (
            col.renderCell({ row })
          ) : (
            <div className={`my-3 ${col.cellStyle}`}>
              {row.getValue(col.field) || "-"}
            </div>
          );
        },
      };
    });
    setTableColumns(_tableColumns);
  };

  const table = useReactTable({
    data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <>
      {/* <div className="flex items-center py-4">
        <DataTableViewOptions table={table} />
      </div> */}
      <div className="rounded-md w-full">
        <Table className="border-transparent text-sm">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="hover:bg-transparent text-[#A1A1A1] border-transparent"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="border border-transparent rounded-lg">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="bg-[#F5F5F5] dark:bg-[#1E2329] border-2 border-white dark:border-black m-3 dark:hover:bg-[#2E323A]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="first:rounded-l-lg last:rounded-r-lg"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="mt-5">
        <DataTablePagination table={table} totalRows={data.length} />
      </div>
    </>
  );
}
