import { NextRequest } from "next/server"
import prisma from "@/utils/prisma"
import { z } from "zod"

import { nanoid } from 'nanoid'
import { generateTokens, getUserSession, isAdmin } from "@/utils/jwt"
import bcrypt from 'bcrypt'

const routeContextSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
})

let updateSchema = z.object({
  isAdmin: z.boolean().optional(),
  datasetId: z.any().optional(),
  password: z.any().optional()
})

export async function GET(req: NextRequest, context: z.infer<typeof routeContextSchema>) {
  try {
    const { params } = routeContextSchema.parse(context);

    if (!(await isAdmin(req))) {
      return new Response('User is not admin', { status: 403 })
    }



  } catch (error) {

    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}


export async function DELETE(req: NextRequest, context: z.infer<typeof routeContextSchema>) {
  try {
    const { params } = routeContextSchema.parse(context);

    if (!(await isAdmin(req))) {
      return new Response('User is not admin', { status: 403 })
    }

    await prisma.user?.delete({
      where: {
        id: params.id
      }
    })

    return new Response(null, { status: 200 })

  } catch (error) {

    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}






export async function POST(req: NextRequest, context: z.infer<typeof routeContextSchema>) {
  try {
    const { params } = routeContextSchema.parse(context);
    let json = await req.json();
    const body = updateSchema.parse(json)

    if (!(await isAdmin(req))) {
      return new Response('User is not admin', { status: 403 })
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        id: params.id,
      }
    });

    if (!existingUser) {
      return new Response('User not found', { status: 403 })
    }

    let updatedData: any = { isAdmin: body?.isAdmin }
    if (body.password) {
      updatedData.password = bcrypt.hashSync(body.password, 12);
    }
    if (body.datasetId) {
      updatedData.dataset = {
        connect: {
          id: body.datasetId
        }
      }
    }

    let updatedUser = await prisma.user?.update({
      where: {
        id: params?.id,
        
      },
      data: updatedData
    })


    return new Response(JSON.stringify(updatedUser))


  } catch (error) {
    console.log(118, error)
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}


