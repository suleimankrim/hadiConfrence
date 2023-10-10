'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { deleteCookie } from 'cookies-next'
export default function Logout({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  function handlrClick() {
    deleteCookie('user')
    setOpen(false)
  }

  return (
    <div className="flex justify-center">
      <Button onClick={handlrClick}>Logout</Button>
    </div>
  )
}
