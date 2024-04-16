import { RefreshCw } from "lucide-react";
import { Button as SButton } from "../ui/button";

interface PropsT {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "secondaryOutline"
    | "ghost"
    | "link"
    | null
    | undefined;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

export function Button(props: PropsT) {
  return (
    <SButton
      onClick={props?.onClick && props.onClick}
      variant={props.variant}
      disabled={props.disabled || props.loading}
      size={props.size}
      className={`${props.className}`}
      type={props.type ?? "button"}
    >
      {props.loading && <RefreshCw className="mr-2 h-4 w-4 animate-spin" />}
      {props.children}
    </SButton>
  );
}
