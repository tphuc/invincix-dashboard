import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input as SInput } from "../ui/input";

interface InputProps {
  form: any;
  name: string;
  type?: string;
  placeholder?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  disabled?: boolean
  variant?: "contained" | "outline";
}

export function Input(props: InputProps) {
  return (
    <div className={props.className ?? ""}>
      <FormField
        control={props.form.control}
        name={props.name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <SInput
                variant={props?.variant}
                type={props.type || "text"}
                placeholder={props.placeholder || ""}
                startIcon={props.startIcon}
                endIcon={props.endIcon}
                disabled={props.disabled}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
