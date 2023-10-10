'use client'
import React, { use, useEffect, useState } from 'react'
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
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Logout from './Logout'
import { getCookie } from 'cookies-next'

export default function Headers() {
  const [open, setopen] = useState(false)
  const [login, setLogin] = useState(true)
  const [mont, setmont] = useState(false)
  const pathName = usePathname()
  const userName = getCookie('user')?.split('+')[1]
  useEffect(() => {
    setmont(true)
  }, [])

  return (
    <>
      <div className="h-16 bg-sky-500 flex justify-between items-center px-5">
        <div className="text-4xl font-bold text-white">QSES</div>
        <div className="flex justify-between items-center gap-32">
          <Link
            className={cn(
              'text-xl font-bold text-white',
              pathName == '/' ? 'text-2xl underline' : 'text-white'
            )}
            href={'/'}
          >
            Home
          </Link>
          <Link
            className={cn(
              'text-xl font-bold text-white',
              pathName == '/about' ? 'text-2xl underline' : 'text-white'
            )}
            href={'about'}
          >
            About
          </Link>
          <Link
            className={cn(
              'text-xl font-bold text-white',
              pathName == '/papers' ? 'text-2xl underline' : 'text-white'
            )}
            href={'papers'}
          >
            Call for Papers
          </Link>
          <Link
            className={cn(
              'text-xl font-bold text-white',
              pathName == '/add' ? 'text-2xl underline' : 'text-white'
            )}
            href={'add'}
          >
            About
          </Link>
        </div>
        <div>
          {!mont ? null : (
            <AlertDialog open={open} onOpenChange={setopen}>
              <AlertDialogTrigger className="text-white text-lg font-bold">
                {userName ? userName : 'Login/Signin'}
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogCancel className="absolute top-2 right-4">
                  X
                </AlertDialogCancel>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-center">
                    {userName ? 'logout' : login ? 'Login' : 'Signin'}
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {userName ? (
                      <Logout setOpen={setopen}></Logout>
                    ) : login ? (
                      <Login setLogIn={setLogin} setOpen={setopen}></Login>
                    ) : (
                      <SignIn setLogIn={setLogin} setOpen={setopen} />
                    )}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter></AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>
    </>
  )
}
