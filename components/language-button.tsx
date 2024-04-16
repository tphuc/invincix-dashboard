"use client";

import { Button, DropdownMenu } from "@/components/common";
import { ChevronDown } from "lucide-react";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageButton() {

  const router = useRouter();
  const pathname = usePathname();

  let pathnameWithoutLocale = pathname.split("/");
  pathnameWithoutLocale.splice(0, 2);

  return (
    <DropdownMenu
      title={
        <Button variant="secondary" className="flex space-x-3">
    
          <ChevronDown />
        </Button>
      }
      menuContent={[
        {
          type: "separator",
        },
        {
          content: "English",
          type: "item",
          onClick: () => {
            router.push(`/en/${pathnameWithoutLocale.join("/")}`);
          },
        },
        {
          content: "Tiếng Việt",
          type: "item",
          onClick: () => {
            router.push(`/vi/${pathnameWithoutLocale.join("/")}`);
          },
        },
      ]}
    />
  );
}
