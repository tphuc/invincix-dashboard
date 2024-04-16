import { Checkbox as SCheckbox } from "../ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

interface OptionT {
  value: string;
  label: string;
}

interface CheckboxProps {
  form: any;
  name: string;
  label?: string;
  className?: string;
  onChange?: (checked: string[]) => void;
  options: OptionT[];
}

export function Checkbox(props: CheckboxProps) {
  return (
    <div className={props.className ?? ""}>
      <FormField
        control={props.form.control}
        name={props.name}
        render={() => (
          <FormItem>
            <div className="mb-5">
              <FormLabel htmlFor={props.name} className="text-base">
                {props?.label || ""}
              </FormLabel>
            </div>
            <FormMessage />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {props.options.map((item) => (
                <FormField
                  key={item.value}
                  control={props.form.control}
                  name={props.name}
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.value}
                        className="flex flex-row items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <SCheckbox
                            checked={field.value?.includes(item.value)}
                            onCheckedChange={(checked) => {
                              const changedValue = checked
                                ? [...field.value, item.value]
                                : field.value?.filter(
                                    (value: string) => value !== item.value
                                  );
                              props?.onChange && props.onChange(changedValue);
                              return field.onChange(changedValue);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
          </FormItem>
        )}
      />
    </div>
  );
}
