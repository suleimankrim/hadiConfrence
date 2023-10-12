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
import { it } from 'node:test'
import useScreenSize from '@/hooks/screen-hooks'
import SmallWordDrag from './SmallWordDrag'
import AboutComp from './AboutComp'
export default function Headers() {
  const [open, setopen] = useState(false)
  const [login, setLogin] = useState(true)
  const [mont, setmont] = useState(false)
  const pathName = usePathname()
  const userName = getCookie('user')?.split('+')[1]
  useEffect(() => {
    setmont(true)
  }, [])
  const word = [
    { pathName: '/', name: 'Home' },
    { pathName: '/about', name: 'About' },
    { pathName: '/work', name: 'Call for Workshops' },
    { pathName: '/sponser', name: 'Call for Sponsores' },
    { pathName: '/add', name: 'Paper Submission' },
    { pathName: '/papers', name: 'Call for Papers' },
  ]
  const screen = useScreenSize()
  return (
    <>
      <div className="h-16 md:h-24 flex justify-between items-center px-2 md:px-5">
        {screen.width < 700 ? <SmallWordDrag></SmallWordDrag> : null}
        <div className="ml-3 w-full h-full max-w-[80px] max-h-[40px] md:max-w-[130px] md:max-h-[70px] relative font-bold text-white ">
          <Image src={'/Group 4.png'} draggable={false} fill alt="logo"></Image>
        </div>
        {screen.width > 700 ? (
          <div className="flex justify-between items-center gap-10">
            {word.map((item, idx) => (
              <div key={idx} className="flex gap-1">
                <Link
                  key={idx}
                  className={cn(
                    'text-sm md:text-lg font-bold text-black',
                    pathName == `${item.pathName}`
                      ? 'text-base md:text-xl text-sky-700'
                      : ''
                  )}
                  href={`${item.pathName}`}
                >
                  {item.name}
                </Link>
                {item.name === 'About' ? <AboutComp key={idx} /> : null}
              </div>
            ))}
          </div>
        ) : null}
        <div>
          {!mont ? null : (
            <AlertDialog open={open} onOpenChange={setopen}>
              <AlertDialogTrigger
                className="text-xs md:text-base font-bold border bg-white 
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
      {screen.width < 700 ? null : (
        <div className="px-40">
          <Separator className="bg-blue-800"></Separator>
        </div>
      )}
    </>
  )
}
