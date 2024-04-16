import { Table } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectSeparator,
} from "../../ui/select";
import { Button } from "../../ui/button";
import * as React from "react";

export interface OptionT {
  label: string;
  value: string;
}

interface PropsT<TData> {
  table: Table<TData>;
  filterField: string;
  options: OptionT[];
}

export function SelectFilter<TData>(props: PropsT<TData>) {
  const [value, setValue] = React.useState<string>("");

  return (
    <div className="my-2 ml-0">
      <Select
        value={
          (props.table
            .getColumn(props.filterField)
            ?.getFilterValue() as string) ?? ""
        }
        onValueChange={(value) => {
          props.table.getColumn(props.filterField)?.setFilterValue(value);
          setValue(value);
        }}
      >
        <SelectTrigger className="w-full">
          {value !== "" ? value : `Select ${props.filterField}`}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {props.options.map((option, i) => (
              <SelectItem key={i} value={option.value}>{option.label}</SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          <Button
            className="w-full flex justify-start"
            variant="ghost"
            onClick={() => {
              props.table.getColumn(props.filterField)?.setFilterValue("");
              setValue("");
            }}
          >
            Clear
          </Button>
        </SelectContent>
      </Select>
    </div>
  );
}
