'use client';


import { Avatar } from "@/components/common";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut, Settings } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { getCurrentUser } from "@/utils";



export default function UserNavDropdown() {
  const user = useSession()?.data?.user as any
  const router = useRouter()
  return <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <div className="flex items-center w-full h-full bg-section  rounded-lg">
        <Button variant='ghost' className="w-full flex items-center justify-between gap-4 p-2 px-6">

          <Image width={600} height={600} alt='' style={{objectFit:"cover"}} className="w-[40px] h-[40px] bg-gray-800 rounded-full  border border-slate-200" src='/partner.svg' />
          <div className="flex flex-1 gap-2 items-center justify-between">
            <p className="text-lg hidden md:block truncate text-ellipsis">{user?.username}</p>
            <ChevronDown className="w-5 h-5" />
          </div>
        </Button>
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-full">
      <DropdownMenuItem className="min-w-[200px] flex gap-2" onClick={async () => {
        await signOut()
        router?.push('/login')
        toast({
          variant: "success",
          title: "Logged out successfully!"
        });
      }}>
        <LogOut className="w-4 h-4"/>
        Logout
      </DropdownMenuItem>

      {user?.isAdmin && <DropdownMenuItem className="min-w-[200px] flex gap-2" onClick={async () => {
        
        router?.push('/admin/users')
       
      }}>
        <Settings className="w-4 h-4"/>
        ADMIN
      </DropdownMenuItem>
}
    </DropdownMenuContent>
  </DropdownMenu>
}