import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Label } from "../ui/label";
import { Switch as SSwitch } from "../ui/switch";

interface SwitchProps {
  label: string;
  form: any;
  name: string;
  className?: string;
  defaultValue?: boolean;
}

export function Switch(props: SwitchProps) {
  return (
    <div className={props.className ?? ""}>
      <FormField
        control={props.form.control}
        name={props.name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="flex items-center space-x-2">
                <SSwitch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id={props.name}
                />
                <Label htmlFor={props.name}>{props.label}</Label>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
