import { NextRequest } from "next/server"
import { z } from "zod"
import * as xlsx from 'xlsx';
import prisma from "@/utils/prisma";
let updateSchema = z.object({
  username: z.any(),
  password: z.any()
})

const routeContextSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
})


export async function GET(req: NextRequest, context: z.infer<typeof routeContextSchema>) {
  try {
    const {id} = context.params
    const record = await prisma.user.findUnique({
      where: {
        id: id
      },
      select: {
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
