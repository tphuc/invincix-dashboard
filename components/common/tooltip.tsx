import {
  Tooltip as STooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface TooltipPropsT {
  children: React.ReactNode;
  title: string;
  side?: "top" | "bottom" | "left" | "right";
}

export function Tooltip(props: TooltipPropsT) {
  return (
    <TooltipProvider delayDuration={300}>
      <STooltip>
        <TooltipTrigger asChild>{props.children}</TooltipTrigger>
        <TooltipContent side={props?.side || "top"}>
          <p>{props.title}</p>
        </TooltipContent>
      </STooltip>
    </TooltipProvider>
  );
}
