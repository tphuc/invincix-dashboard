import * as React from "react";

import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "outline" | "contained";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, startIcon, endIcon, variant = "contained", ...props },
    ref
  ) => {
    return startIcon || endIcon ? (
      <div
        className={cn(
          "flex items-center w-full rounded-md",
          variant == "outline"
            ? "bg-white/10 border border-white"
            : "bg-input focus-within:ring-ring focus-within:ring-2"
        )}
      >
        <span className="text-muted ml-3">{startIcon}</span>
        <input
          type={type}
          className={cn(
            "flex h-14 w-full rounded-md px-3 py-2 text-sm font-bold placeholder:font-normal ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className,
            variant == "outline"
              ? "bg-transparent placeholder:text-[#D7D7D7]"
              : "bg-input placeholder:text-muted-foreground"
          )}
          ref={ref}
          {...props}
        />
        <span className="text-white mr-3 px-4 py-2 flex items-center">
          {endIcon}
        </span>
      </div>
    ) : (
      <input
        type={type}
        className={cn(
          "flex h-14 w-full rounded-md px-3 py-2 text-sm font-bold placeholder:font-normal ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
          variant == "outline"
            ? "bg-white/10 placeholder:text-[#D7D7D7]"
            : "bg-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 placeholder:text-muted-foreground"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
