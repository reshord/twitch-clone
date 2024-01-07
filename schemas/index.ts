import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Invalid validation'
    }),
    password: z.string().min(1, {
        message: 'At least 1 character!'
    })
})