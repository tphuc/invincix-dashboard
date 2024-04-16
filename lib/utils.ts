import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatINDCurrency(number: any){
  return Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number)
}