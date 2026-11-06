"use server"

import { createClient } from "@supabase/supabase-js";
import { error } from "console";
import { redirect } from "next/navigation";
import {z} from "zod";
const RegisterSchema = z.object({
    username: z.string().min(4, "Username must be at least 4 characters"),
    email: z.string().min(10, "Email must be at least 10 characters" ),
    password: z.string().min(8, "Password must be at least 8 chars"),
})

export async function useRegister(_prevState: any, formData:FormData) {
    const info = RegisterSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        username: formData.get("username"),
    });
    if(!info.success){
        return{
            state: false,
            message: "Validation Errors",
            errors: info.error.flatten().fieldErrors,
        };
    }
    else{
        const supabase = await createClient();
        const {data, error}= await supabase.auth.signUp({
            email: info.data.email,
             password: info.data.password,
             options :{
                data:{
                    username: info.data.username,
                },
             },

        });
        if(error){
            return{
                state: false,
                message: error.message,
            };
        }
        if (!error){
            redirect("/signup/confirm_email");
        }
    } 
    return {
        state: true,
        message: "",
    }
}

    const userSignInSchema = z.object({
        email: z.string().min(6, "The email must be at least 6 characters"),
        password: z.string().min(8, "The email must be at least 8 characters"),
        
    });
     

export async function SignInUser(_prevState: any, formData:FormData){
    
        const info = userSignInSchema.safeParse({
            email: formData.get("email"),
            password: formData.get("password"),
        });
        if(!info.success){
            return{
                state: false,
                message: "",
                errors: info.error.flatten().fieldErrors,

            };
        }

        const supabase= await createClient();
        const {data, error} = await supabase.auth.signInWithPassword({email: info.data.email, password: info.data.password})

        if(error){
            return{
                state: false, 
                message: error.message,
            }
        }else{
            redirect("/")
        }



        
    
}