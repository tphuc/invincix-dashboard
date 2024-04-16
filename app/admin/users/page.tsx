import { redirect } from "next/navigation"
import prisma from "@/utils/prisma"

// import { BillingForm } from "@/components/billing-form"
import { DataTable } from "./table/data-table"
import { getCurrentUser } from "@/utils"
import Link from "next/link"
import { ArrowLeft, Users } from "lucide-react"
import { columns } from "./table/columns"


export const metadata = {
  title: "Billing",
  description: "Manage billing and your subscription plan.",
}

interface PageProps {
  params: { businessId: string }
}


export default async function Page({ params }: PageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  const data = await prisma.user.findMany({
    where: {
    },
    include: {
      dataset: true
    },
  }) ?? []

  // console.log(data)

  return (
    <div className="p-4 space-y-4">
      
        <Link href='/dashboard/overview2' className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4"/>
            Back
        </Link>
        <div className="p-4 border rounded-md space-y-4">
            <p className="text-2xl flex items-center gap-2 font-bold">
                <Users className="w-8 h-8"/>
                Users
            </p>
            <DataTable  data={data ?? []} columns={columns}/>
        </div>

    </div>
  )
}
