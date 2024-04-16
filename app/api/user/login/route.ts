import { NextRequest } from "next/server"
import prisma from "@/utils/prisma"
import { z } from "zod"

import { nanoid} from 'nanoid'
import { generateTokens } from "@/utils/jwt"
import bcrypt from 'bcrypt'

const routeContextSchema = z.object({
  params: z.object({
      id: z.string(),
  }),
})

let updateSchema = z.object({
    username: z.any(),
    password: z.any()
})





export async function POST(req: NextRequest) {
  try {

      let json = await req.json();
      const body = updateSchema.parse(json)
      const {username, password} = body;
      if (!username || !password) {
       
        return new Response("Invalid login credentials.", {status: 400})
      }
  
   
      const existingUser = await prisma.user.findUnique({
        where: {
          username
        },
      
      });
      console.log(43, existingUser)
      if (!existingUser) {
        return new Response("Invalid login credentials.", {status: 401})
      }
  
      console.log(48, '------')
      const validPassword = await bcrypt.compare(password, existingUser.password);

      if (!validPassword) {
        throw new Response('Invalid login credentials.', {status: 401});
      }
  
    const jti = nanoid();
    const { accessToken, refreshToken } = generateTokens(existingUser, jti);


    const {password: userPassword, ...userInfo} = existingUser;
      return new Response(JSON.stringify({
        ...userInfo,
        accessToken,
        refreshToken
      }))

  } catch (error) {
    console.log(68, error)

      if (error instanceof z.ZodError) {
          return new Response(JSON.stringify(error.issues), { status: 422 })
      }

      return new Response(null, { status: 500 })
  }
}

