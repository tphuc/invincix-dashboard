import { Alert as SAlert, AlertDescription, AlertTitle } from "../ui/alert";

interface PropsT {
  title: string;
  description: string;
  variant: "default" | "destructive";
  icon?: React.ReactNode;
}

export function Alert(props: PropsT) {
  return (
    <SAlert variant={props.variant ?? "default"}>
      {props.icon ?? <></>}
      <AlertTitle>{props.title}</AlertTitle>
      <AlertDescription>{props.description}</AlertDescription>
    </SAlert>
  );
}
