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
import { LoginSchema, LoginType } from '../types/user'

export default function Login({
  setOpen,
  setLogIn,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setLogIn: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: LoginType) {
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
          {' '}
          Do you want to sign up?
          <span
            onClick={() => {
              setLogIn(false)
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
