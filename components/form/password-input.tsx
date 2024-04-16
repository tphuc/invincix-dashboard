import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input as SInput } from "../ui/input";
import { Button } from "../common/button";
import { useState } from "react";
import { Eye } from "lucide-react";
import { EyeClosedIcon as EyeClose } from "@radix-ui/react-icons";

interface InputProps {
  form: any;
  name: string;
  type?: string;
  placeholder?: string;
  startIcon?: React.ReactNode;
  className?: string;
  variant?: "contained" | "outline";
}

export function PasswordInput(props: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={props.className ?? ""}>
      <FormField
        control={props.form.control}
        name={props.name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <SInput
                className="py-0"
                variant={props?.variant}
                type={showPassword ? "text" : "password"}
                placeholder={props.placeholder || "Password"}
                endIcon={
                  <Button
                    className="p-0 m-0 h-fit"
                    variant="ghost"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye /> : <EyeClose />}
                  </Button>
                }
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
