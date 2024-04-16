import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import {
  Select as SSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface OptionT {
  value: string;
  label: string;
}

interface SelectProps {
  placeholder?: string;
  options?: OptionT[];
  className?: string;
  form: any;
  name: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export function Select(props: SelectProps) {
  return (
    <div className={props.className ?? ""}>
      <FormField
        control={props.form.control}
        name={props.name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <SSelect
                disabled={props.disabled}
                onValueChange={(value) => {
                  props?.onChange && props.onChange(value);
                  return field.onChange(value);
                }}
                value={field.value}
              >
                <SelectTrigger>
                  {field?.value ? (
                    <SelectValue
                      defaultValue={props.placeholder}
                      placeholder={props.placeholder}
                    />
                  ) : (
                    <span className="text-muted">{props.placeholder}</span>
                  )}
                </SelectTrigger>
                <SelectContent className="max-h-[500px] overflow-y-scroll">
                  <SelectGroup>
                    {props.options?.map((option) => (
                      <SelectItem value={option.value} key={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </SSelect>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
