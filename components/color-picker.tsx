'use client';

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { HexColorPicker } from "react-colorful";


export default function ColorPicker({ value, onChange, className }: {value: any, onChange: any, className?: any}){

    return <Popover>
        <PopoverTrigger asChild>
            <div className={cn("flex h-14 items-center gap-2 rounded-sm cursor-pointer p-2 bg-input", className)}>
                <div className="w-10 h-10 rounded-[6px]" style={{background:`${value}`}}></div>
                {value}
            </div>
        </PopoverTrigger>
        <PopoverContent>
            <HexColorPicker defaultValue={value} onChange={onChange}/>
        </PopoverContent>
    </Popover>
}