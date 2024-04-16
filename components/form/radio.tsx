import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface OptionT {
  value: string;
  label: string;
}

interface RadioProps {
  options?: OptionT[];
  defaultValue?: string;
  form: any;
  name: string;
  className?: string;
  label?: string;
  onChange?: (value: string) => void;
}

export function Radio(props: RadioProps) {
  return (
    <div className={props.className ?? ""}>
      <FormField
        control={props.form.control}
        name={props.name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{props.label || ""}</FormLabel>
            <FormControl>
              <RadioGroup
                className="flex items-center space-x-5"
                defaultValue={props.defaultValue}
                value={field.value}
                onValueChange={(value: string) => {
                  props?.onChange && props.onChange(value);
                  return field.onChange(value);
                }}
              >
                {props.options?.map((option) => (
                  <div
                    className="flex items-center space-x-2"
                    key={option.value}
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
