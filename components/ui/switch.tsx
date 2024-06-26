"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "../../lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [isChecked, setIsChecked] = React.useState(props.checked);

  return (
    <SwitchPrimitives.Root
      className={cn(
        "relative peer inline-flex h-[20px] w-[65px] shrink-0 cursor-pointer items-center rounded-full border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#216544] data-[state=unchecked]:bg-input",
        className
      )}
      {...props}
      ref={ref}
      onCheckedChange={(checked) => {
        setIsChecked(checked);
        props.onCheckedChange && props.onCheckedChange(checked);
      }}
    >
      <span
        className={`absolute text-sm ${
          isChecked
            ? "translate-x-2 text-foreground"
            : "translate-x-8 text-muted"
        }`}
      >
        {isChecked ? "ON" : "OFF"}
      </span>
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none absolute h-7 w-7 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-9 data-[state=checked]:bg-primary data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
