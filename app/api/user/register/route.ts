import { NextRequest } from "next/server"
import prisma from "@/utils/prisma"
import { z } from "zod"

import { nanoid} from 'nanoid'
import { generateAccessToken, generateTokens } from "@/utils/jwt"
import bcrypt from 'bcrypt'

const routeContextSchema = z.object({
  params: z.object({
      id: z.string(),
  }),
})

let updateSchema = z.object({
    username: z.any(),
    password: z.any(),
    datasetId: z.any()
})

export async function POST(req: NextRequest) {
  try {

      let json = await req.json();
      const body = updateSchema.parse(json)


      const existingUser = await prisma.user.findUnique({
        where: {
            username: body.username,
        }
      });

    if(existingUser){
        return new Response("Username is already existed", { status: 403 })
    }
    const password = await bcrypt.hash(body.password, 12);
    const user = await prisma.user.create({
        data: {
            username: body.username,
            password,
            datasetId: body?.datasetId ?? undefined
        }
    });

    const {password: Upassword, ...userWithoutPass} = user
    await generateAccessToken(userWithoutPass)
    // const jti = nanoid();
    
    // const { accessToken, refreshToken } = generateTokens(user, jti);
    // await addRefreshTokenToWhitelist({ jti, refreshToken, userId: user.id });

      return new Response(JSON.stringify(userWithoutPass))

  } catch (error) {

    console.log(53, error)
      if (error instanceof z.ZodError) {
          return new Response(JSON.stringify(error.issues), { status: 422 })
      }

      return new Response(null, { status: 500 })
  }
}

