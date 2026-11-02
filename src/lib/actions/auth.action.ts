"use server"
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
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
        const supabase = createClient();
        const data=(await supabase).auth.signUp({email: info.data.email, password: info.data.password}

            
        ) 
    } 
    return {
        state: true,
        message: "",
    }
}