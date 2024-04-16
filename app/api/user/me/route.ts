import { NextRequest } from "next/server"
import { z } from "zod"
import * as xlsx from 'xlsx';
import prisma from "@/utils/prisma";
import { getUserSession } from "@/utils/jwt";
let updateSchema = z.object({
  username: z.any(),
  password: z.any()
})




export async function GET(req: NextRequest) {
  try {

    let user = await getUserSession(req) as any
    if(!user?.id)
      return new Response("Not authenticated", { status: 401 })

    const record = await prisma.user.findUnique({
      where: {
        id: user?.id
      },
      include: {
        dataset: true
      }
    })


    return new Response(JSON.stringify(record.dataset))
  }
  catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }
    return new Response(null, { status: 500 })
  }
}
