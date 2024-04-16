import { Input } from "../../ui/input";
import { Table } from "@tanstack/react-table";

interface PropsT<TData> {
  table: Table<TData>;
  filterField: string;
}

export function InputFilter<TData>(props: PropsT<TData>) {
  return (
    <Input
      size={1}
      placeholder={`Filter ${props.filterField}`}
      value={
        (props.table
          .getColumn(props.filterField)
          ?.getFilterValue() as string) ?? ""
      }
      onChange={(event) =>
        props.table
          .getColumn(props.filterField)
          ?.setFilterValue(event.target.value)
      }
      className="my-2 ml-0"
    />
  );
}
