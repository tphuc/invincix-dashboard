"use client";

import { Button } from "@/components/common";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bell, Menu, X } from "lucide-react";
import { SelectSeparator } from "@/components/ui/select";
import { useRouter } from "next/navigation";

interface MenuT {
  icon: React.ReactNode;
  link: string;
  title: string;
}

interface PropsT {
  brandLogo: React.ReactNode;
  menus: MenuT[];
  pathName: string;
  sidebarLogo: React.ReactNode;
  user: any;
  locale: any;
}

export default function MobileSideBar(props: PropsT) {
  const router = useRouter();

  const getActiveState = (
    path: string,
    link: string,
    type: "text" | "icon"
  ) => {
    const getState = (
      contentType: "text" | "icon",
      stateType: "active" | "normal"
    ) => {
      if (contentType == "text") {
        return stateType == "active" ? "text-primary" : "text-foreground";
      } else if (contentType == "icon") {
        return stateType == "active" ? "text-primary" : "text-foreground";
      }
    };

    if (link === "/") {
      if (path === "/") {
        return getState(type, "active");
      } else {
        return getState(type, "normal");
      }
    } else if (path.startsWith(link)) {
      return getState(type, "active");
    } else {
      return getState(type, "normal");
    }
  };

  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <div>
          <div className="flex justify-between items-center mb-5">
            {props.brandLogo}
            <SheetClose>
              <X />
            </SheetClose>
          </div>
          <SelectSeparator className="mb-5" />
          <ul>
            {props.menus.map((item, i) => (
              <li key={item.link + i.toString()}>
                <Button variant="ghost" onClick={() => router.push(item.link)}>
                  <span className="flex items-center space-x-3">
                    <span
                      className={`${getActiveState(
                        props.pathName,
                        item.link,
                        "icon"
                      )}`}
                    >
                      {item.icon}
                    </span>
                    <p
                      className={`text-xl ${getActiveState(
                        props.pathName,
                        item.link,
                        "text"
                      )}`}
                    >
                      {item.title}
                    </p>
                  </span>
                </Button>
              </li>
            ))}
          </ul>
          <SelectSeparator className="my-5" />
          <div className="flex items-center space-x-3">
           
            <Button variant="secondary">
              <Bell />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
