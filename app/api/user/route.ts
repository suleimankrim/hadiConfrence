import { NextRequest, NextResponse } from 'next/server'
import { SignInSchema, SingUpType } from '../../types/user'
import { db } from '@/prisma/db'

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json()
    const user: SingUpType = SignInSchema.parse(body)
    const userExist = await db.user.findUnique({
      where: { email: user.email },
    })
    if (userExist) return NextResponse.json({ error: 'User already exist' })
    await db.user.create({
      data: user,
    })
    return NextResponse.json({ success: true })
  } catch (e) {
    console.log('====================================')
    console.log(e)
    console.log('====================================')
    return NextResponse.json({ erorr: e })
  }
}
