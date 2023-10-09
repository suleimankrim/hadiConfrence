import z from 'zod'

export const LoginSchema = z.object({
  email: z.string().min(2).max(150),
  password: z.string().min(2).max(150),
})
export type LoginType = z.infer<typeof LoginSchema>

export const SignInSchema = z.object({
  email: z.string().min(2).max(150),
  password: z.string().min(2).max(150),
  userName: z.string().min(2).max(150),
})
export type SingUpType = z.infer<typeof SignInSchema>
