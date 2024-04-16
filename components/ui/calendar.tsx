"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, XCircle } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";
import "./styles.css";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  isDatePicker = false,
  ...props
}: CalendarProps & { isDatePicker?: boolean }) {
  return (
    <div className="bg-secondary rounded-sm">
      <div className="flex justify-center items-center relative overflow-hidden">
        <span className="flex justify-center items-center absolute left-1">
          <p className="text-primary text-[13px] p-4">Calendar</p>
        </span>
        <span className="bg-primary rounded-b-[10px] px-4 mb-3 flex items-center justify-center pt-3 pb-2 w-[100px] calendar-title">
          <p className="text-black text-[10px]">Lorem Ipsum</p>
        </span>
        <span className="p-4 flex justify-center items-center absolute right-1">
          <XCircle className="w-5 h-5" />
        </span>
      </div>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            buttonVariants({ variant: "secondaryOutline" }),
            "h-5 w-5 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell: cn(
            "text-primary rounded-md w-8 font-normal text-sm",
            isDatePicker && "w-10"
          ),
          row: "flex w-full mt-2",
          cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-8 w-8 p-0 text-sm font-normal aria-selected:opacity-100 hover:text-black",
            isDatePicker && "h-10 w-10"
          ),
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-black focus:bg-primary focus:text-primary-foreground focus:rounded-sm",
          day_today: "bg-transparent text-primary",
          day_outside: "text-muted-foreground opacity-50",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle: "aria-selected:bg-accent aria-selected:text-black",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: ({ ...props }) => <ChevronLeft className="h-3 w-3" />,
          IconRight: ({ ...props }) => <ChevronRight className="h-3 w-3" />,
        }}
        {...props}
      />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
