import { CardWrapper } from "./card-wrapper";
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";

import * as z from 'zod'

import {
    Form,
    FormControl,
    FormField,
    FormItem, 
    FormMessage,
    FormLabel
} from '../ui/form'

export const LoginForm = () => {

    const form = useForm<>()

    return ( 
        <CardWrapper 
            headerLabel="Welcome back!" 
            backButtonHref="/auth/register" 
            backButtonLabel="Don't have an account?"
            showSocial
        >
            Login Form
        </CardWrapper>
     );
}