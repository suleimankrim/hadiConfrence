'use client'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'

export default function AboutComp() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Topics</DropdownMenuItem>
          <DropdownMenuItem>Committees</DropdownMenuItem>
          <DropdownMenuItem>Important dates</DropdownMenuItem>
          <DropdownMenuItem>Downloads</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
