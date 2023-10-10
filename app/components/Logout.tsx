'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { deleteCookie } from 'cookies-next'
export default function ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div className="flex justify-center">
      <Button
        onClick={() => {
          deleteCookie('user')
          setOpen(false)
        }}
      >
        Logout
      </Button>
    </div>
  )
}
