import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Textarea as STextarea } from "../ui/textarea";

interface TextareaProps {
  placeholder?: string;
  form: any;
  name: string;
  className?: string;
  disabled?: boolean;
}

export function Textarea(props: TextareaProps) {
  return (
    <div className={props.className ?? ""}>
      <FormField
        control={props.form.control}
        name={props.name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <STextarea
                placeholder={props.placeholder}
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
