'use client'
import React, { use, useState } from 'react'
import Login from './Login'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog'
import SignIn from './SignUp'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function Headers() {
  const [open, setopen] = useState(false)
  const [login, setLogin] = useState(true)
  const param = useParams()
  console.log('====================================')
  console.log(param)
  console.log('====================================')
  return (
    <>
      <div className="h-16 bg-sky-500 flex justify-between items-center px-5">
        <div className="text-4xl font-bold text-white">QSES</div>
        <div className="flex justify-between items-center gap-12">
          <Link className={cn('text-xl font-bold text-white')} href={'/'}>
            Home
          </Link>
          <Link className="text-xl font-bold text-white" href={'about'}>
            About
          </Link>
          <Link className="text-xl font-bold text-white" href={'papers'}>
            Call for Papers
          </Link>
          <Link className="text-xl font-bold text-white" href={'about'}>
            About
          </Link>
        </div>
        <div>
          <AlertDialog open={open} onOpenChange={setopen}>
            <AlertDialogTrigger className="text-white text-lg font-bold">
              Login/SignIn
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogCancel className="absolute top-2 right-4">
                X
              </AlertDialogCancel>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-center">
                  {login ? 'Login' : 'SignIn'}
                </AlertDialogTitle>
                <AlertDialogDescription>
                  {login ? (
                    <Login setLogIn={setLogin} setOpen={setopen}></Login>
                  ) : (
                    <SignIn setLogIn={setLogin} setOpen={setopen} />
                  )}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter></AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </>
  )
}
