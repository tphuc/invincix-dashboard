"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Separator } from "@/components/ui/separator"
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { BadgeCheck, Check, Globe, Pen, PenTool, Plus, Trash } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { toast } from "@/components/ui/use-toast"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRequestAuthenticated } from "@/utils/http"
import { useSWRConfig } from "swr"
import { DeleteDatasetForm } from "../DeleleteDatasetForm"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UpdateDatasetForm } from "../UpdateDatasetForm"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}


export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const router = useRouter()

  const { mutate } = useSWRConfig();
  const { fetch: authFetch } = useRequestAuthenticated()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">

        <DropdownMenuItem asChild>

        </DropdownMenuItem>

        <DropdownMenuItem asChild className="text-[#DB382C]">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-full gap-2 text-sm justify-between" variant={'ghost'}>

                <span>Delete</span>
                <Trash className="w-4 h-4" />
              </Button>

            </AlertDialogTrigger>
            <AlertDialogContent>
              <DeleteDatasetForm
                id={(row?.original as any)?.id}
              />
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Dialog>
            <DialogTrigger asChild>
              <Button size='sm' variant={'ghost'} className="gap-2 justify-between w-full">
              
                Update
                <Pen className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <UpdateDatasetForm data={row?.original}  />
            </DialogContent>
          </Dialog>
        </DropdownMenuItem>

       


      </DropdownMenuContent>
    </DropdownMenu>
  )
}