"use client"

import { CardWrapper } from "./card-wrapper";
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { useTransition } from "react";

import * as z from 'zod'

import {
    Form,
    FormControl,
    FormField,
    FormItem, 
    FormMessage,
    FormLabel
} from '../ui/form'
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { login } from "@/actions/login";

export const LoginForm = () => {

    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const handleSubmit = (data: z.infer<typeof LoginSchema>) => {
        login(data)
    }

    return ( 
        <CardWrapper 
            headerLabel="Welcome back!" 
            backButtonHref="/auth/register" 
            backButtonLabel="Don't have an account?"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            disabled={isPending}
                                            {...field}
                                            placeholder="example@email.com"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >
                        </FormField>
                        <FormField 
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                            disabled={isPending}
                                            {...field}
                                            placeholder="********"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >
                        </FormField>

                    </div>
                    <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full"
                    >
                        Sign In
                    </Button>
                </form>
            </Form>
        </CardWrapper>
     );
}