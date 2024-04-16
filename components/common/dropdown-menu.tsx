import * as React from "react";
import {
  DropdownMenu as SDropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export interface MenuContent {
  type: "label" | "item" | "separator" | string;
  onClick?: () => void;
  content?: React.ReactNode;
}

interface PropsT {
  title: React.ReactNode;
  menuContent: MenuContent[];
}

export function DropdownMenu(props: PropsT) {
  return (
    <SDropdownMenu>
      <DropdownMenuTrigger asChild>
        <span>
          <span className="sr-only">Open menu</span>
          {props.title}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {props.menuContent.map((item, i) => (
          <React.Fragment key={i}>
            {item.type == "label" ? (
              <DropdownMenuLabel onClick={item.onClick}>
                {item.content}
              </DropdownMenuLabel>
            ) : item.type == "item" ? (
              <DropdownMenuItem onClick={item.onClick}>
                {item.content}
              </DropdownMenuItem>
            ) : (
              item.type == "separator" && <DropdownMenuSeparator />
            )}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </SDropdownMenu>
  );
}
