'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { MenuIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import AboutComp from './AboutComp'

export default function SmallWordDrag() {
  const word = [
    { pathName: '/', name: 'Home' },
    { pathName: '/about', name: 'About' },
    { pathName: '/work', name: 'Call for Workshops' },
    { pathName: '/sponser', name: 'Call for Sponsores' },
    { pathName: '/add', name: 'Paper Submission' },
    { pathName: '/papers', name: 'Call for Papers' },
  ]
  const pathName = usePathname()
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="space-y-5 flex flex-col">
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
      </SheetContent>
    </Sheet>
  )
}
