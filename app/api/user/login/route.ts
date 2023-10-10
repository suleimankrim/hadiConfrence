import { NextRequest, NextResponse } from 'next/server'

import { db } from '@/prisma/db'
import { LoginSchema, LoginType } from '@/app/types/user'

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json()
    const user: LoginType = LoginSchema.parse(body)
    const userExist = await db.user.findUnique({
      where: { email: user.email },
    })
    if (!userExist)
      return NextResponse.json({ error: 'User Not exist please sign in.' })
    if (user.password !== userExist.password)
      return NextResponse.json({ error: 'Wrong Credentials' })
    return NextResponse.json(userExist)
  } catch (e) {
    console.log('====================================')
    console.log(e)
    console.log('====================================')
    return NextResponse.json({ erorr: e })
  }
}
