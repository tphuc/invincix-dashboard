'use client';

import Image from "next/image";
import { DataTableRowActions } from "./data-table-row-actions";
import { Checkbox } from "@/components/ui/checkbox";
import { BadgeCheck, CheckCircle, CheckCircle2, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";




export const columns = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={table.getIsAllPageRowsSelected()}
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//         className="translate-y-[2px]"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//         className="translate-y-[2px]"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
  {
    accessorKey: 'username',
    header: 'Username',
    cell: ({ row }) => {
      return <div className="space-y-2">
        <p>{row?.original?.username}</p>
      </div>
    }
  },
  {
    accessorKey: 'createdAt',
    header: 'Created',
    cell: ({ row }) => {
      return <div className="space-y-2">
        <p >{format(row?.original?.createdAt, 'Pp')}</p>

      </div>
    }
  },
  {
    accessorKey: 'dataset',
    header: 'Dataset',
    cell: ({ row }) => {
      return <div className="space-y-2">
        <p className="text-green-500">{row?.original?.dataset?.name}</p>
      </div>
    }
  },
  {
    enableSorting: true,
    accessorKey: 'isAdmin',
    header: 'Is Admin',
    cell: ({ row }) => {
      return <div className="flex items-center flex-wrap">
        {row?.original?.isAdmin && <Badge>Admin</Badge>}
      </div>
    }
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },

]