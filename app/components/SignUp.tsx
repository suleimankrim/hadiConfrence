'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { SignInSchema, SingUpType } from '../types/user'
import {
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog'
import axios from 'axios'
import toast from 'react-hot-toast'
import { setCookie } from 'cookies-next'
import { NEXT } from '@/config'

export default function SignIn({
  setOpen,
  setLogIn,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setLogIn: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const form = useForm<SingUpType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
      userName: '',
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: SingUpType) {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_URL_PUBLIC}/api/user`,
        values
      )
      if (data.success) {
        setCookie('user', `${values.email}+${values.userName}`)
        setOpen(false)
        return toast.success('User created successfully')
      } else {
        return toast.error(data.error)
      }
    } catch (e) {}
    setOpen(false)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>UserName:</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password:</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <h1>
          Do you want to Login?
          <span
            onClick={() => {
              setLogIn(true)
            }}
            className="text-sky-800 cursor-pointer ml-1 text-lg"
          >
            SignIn
          </span>
        </h1>
        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}
