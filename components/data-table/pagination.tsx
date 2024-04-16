import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  totalRows: number;
}

export function DataTablePagination<TData>({
  table,
  totalRows,
}: DataTablePaginationProps<TData>) {
  const getPageSizeIndex = (pageIndex: number, pageSize: number) => {
    const from = pageIndex * pageSize + 1;
    const temp =
      (table.getState().pagination.pageIndex + 1) *
      table.getState().pagination.pageSize;
    const left = totalRows - temp;
    let to;
    if (left > 0) {
      to = temp;
    } else {
      to = temp + left;
    }
    return [from, to];
  };

  return (
    <div>
      {/* <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div> */}
      <div className="flex items-center justify-between space-x-6 lg:space-x-8">
        <div className="hidden md:flex">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium text-muted">Items per page</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger className="w-[70px] h-[50px] border-[#767F89] rounded-[8px]">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex ml-3 items-center justify-center text-sm font-medium text-muted">
            {
              getPageSizeIndex(
                table.getState().pagination.pageIndex,
                table.getState().pagination.pageSize
              )[0]
            }
            -
            {
              getPageSizeIndex(
                table.getState().pagination.pageIndex,
                table.getState().pagination.pageSize
              )[1]
            }{" "}
            of {totalRows} Items
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <div className="hidden md:flex space-x-2 items-center">
            <Button
              variant="secondaryOutline"
              className="hidden h-6 w-6 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to first page</span>
              <DoubleArrowLeftIcon className="h-3 w-3" />
            </Button>
            <span className="text-muted text-base">First</span>
          </div>
          <div className="flex space-x-2 items-center">
            <Button
              variant="secondaryOutline"
              className="h-6 w-6 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeftIcon className="h-3 w-3" />
            </Button>
            <span className="text-muted text-base">Prev</span>
          </div>
          <div className="flex mx-5 items-center justify-center text-sm font-medium text-muted">
            <span className="mr-2 w-[50px] h-[50px] border border-[#767F89] rounded-[8px] flex items-center justify-center bg-secondary text-foreground">
              {table.getState().pagination.pageIndex + 1}
            </span>{" "}
            of {table.getPageCount()}
          </div>
          <div className="flex space-x-2 items-center">
            <Button
              variant="secondaryOutline"
              className="h-6 w-6 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRightIcon className="h-3 w-3" />
            </Button>
            <span className="text-muted text-base">Next</span>
          </div>
          <div className="hidden md:flex space-x-2 items-center">
            <Button
              variant="secondaryOutline"
              className="h-6 w-6 p-0"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to last page</span>
              <DoubleArrowRightIcon className="h-3 w-3" />
            </Button>
            <span className="text-muted text-base">Last</span>
          </div>
        </div>
      </div>
    </div>
  );
}
