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
import Image from 'next/image'
import { getCookie } from 'cookies-next'
import { Separator } from '@/components/ui/separator'
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
      <div className="h-24 flex justify-between items-center px-5">
        <div className="w-[140px] h-[80px] relative font-bold text-white ">
          <Image src={'/Group 4.png'} fill alt="logo"></Image>
        </div>
        <div className="flex justify-between items-center gap-10">
          <Link
            className={cn(
              'text-xl font-bold text-black',
              pathName == '/' ? 'text-2xl underline' : 'text-black'
            )}
            href={'/'}
          >
            Home
          </Link>
          <Link
            className={cn(
              'text-xl font-bold text-black',
              pathName == '/about' ? 'text-2xl underline' : 'v'
            )}
            href={'about'}
          >
            About
          </Link>
          <Link
            className={cn(
              'text-xl font-bold text-black',
              pathName == '/papers' ? 'text-2xl underline' : 'text-black'
            )}
            href={'papers'}
          >
            Call for Papers
          </Link>
          <Link
            className={cn(
              'text-xl font-bold text-black',
              pathName == '/sponser' ? 'text-2xl underline' : 'text-black'
            )}
            href={'sponser'}
          >
            Call for Sponseres
          </Link>
          <Link
            className={cn(
              'text-xl font-bold text-black',
              pathName == '/work' ? 'text-2xl underline' : 'text-black'
            )}
            href={'work'}
          >
            Call for WorkShops
          </Link>
          <Link
            className={cn(
              'text-xl font-bold text-black',
              pathName == '/add' ? 'text-2xl underline' : 'text-black'
            )}
            href={'add'}
          >
            Add Paper
          </Link>
        </div>
        <div>
          {!mont ? null : (
            <AlertDialog open={open} onOpenChange={setopen}>
              <AlertDialogTrigger
                className=" text-base font-bold border bg-white 
              hover:bg-sky-600 hover:text-white
              text-sky-600 p-2 rounded"
              >
                {userName ? userName : 'Login / Sign up'}
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
      <div className="px-40">
        <Separator className="bg-blue-800"></Separator>
      </div>
    </>
  )
}
