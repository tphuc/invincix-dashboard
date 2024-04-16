"use client";

import { Button } from "@/components/common";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";


export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="secondary"
      onClick={() => {
        setTheme(theme == "dark" ? "light" : "dark") 
        console.log(16, theme)
      }}
    >
     
      <Sun
        color="black"
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
