import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "../../lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface PropsT {
  title?: string;
  selectedDate?: Date;
  onSelect: (event: any) => void;
}

export function DatePicker(props: PropsT) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          className={cn(
            `h-14 w-full justify-between text-left font-normal ${
              props.selectedDate ? "text-foreground" : "text-muted-foreground"
            }`
          )}
        >
          {props.selectedDate ? (
            format(props.selectedDate, "PPP")
          ) : (
            <span>{props.title}</span>
          )}
          <CalendarIcon className="mr-2 h-5 w-5 text-primary" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          isDatePicker
          mode="single"
          selected={props.selectedDate || new Date()}
          onSelect={props.onSelect}
          initialFocus
          className="rounded-md bg-secondary"
        />
      </PopoverContent>
    </Popover>
  );
}
