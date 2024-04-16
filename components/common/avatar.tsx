import { ChevronDown } from "lucide-react";
import { Avatar as SAvatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface PropsT {
  imgSrc: string;
  imgAlt: string;
  fallback: React.ReactNode;
  className?: string;
}

export function Avatar(props: PropsT) {
  return (
    <div className="flex items-center gap-2">
    <SAvatar className={`border border-[#DEFA8E] ${props?.className || ""}`}>
      <AvatarImage src={props.imgSrc} alt={props.imgAlt} />
      <AvatarFallback>Hello</AvatarFallback>
    </SAvatar>
    <span>{props.fallback}</span>
    <ChevronDown/>
    </div>
  );
}
