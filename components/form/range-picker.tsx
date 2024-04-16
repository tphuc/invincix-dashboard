import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "../../lib/utils";
import { addDays } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface RangePickerProps {
  title?: string;
  selectedRange: { from: Date; to: Date };
  onSelect: (event: any) => void;
}

export const RangePicker = (props: RangePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          className={cn(
            `h-14 w-[300px] justify-between text-left font-normal ${
              props.selectedRange?.from && props.selectedRange?.to
                ? "text-foreground"
                : "text-muted-foreground"
            }`
          )}
        >
          {props.selectedRange?.from ? (
            props.selectedRange.to ? (
              <>
                {format(props.selectedRange.from, "LLL dd, y")} -{" "}
                {format(props.selectedRange.to, "LLL dd, y")}
              </>
            ) : (
              format(props.selectedRange.from, "LLL dd, y")
            )
          ) : (
            <span>{props.title}</span>
          )}
          <CalendarIcon className="mr-2 h-5 w-5 text-primary" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={props.selectedRange.from}
          selected={props.selectedRange}
          onSelect={props.onSelect}
          numberOfMonths={2}
          className="rounded-md bg-secondary"
        />
      </PopoverContent>
    </Popover>
  );
};
