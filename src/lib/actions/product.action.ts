import z, { size } from "zod"

const ValidateSchema= z.object({
    name: z.string().min(3, "Name"),
    price: z.number().positive("Positive"),
    size: z.string(),
    color: z.array(z.string()).min(1, ),

    

})

export function AddProduct(_prevState: unknown, formData: FormData){
    const validationChecker = ValidateSchema.safeParse({
        name: formData.get("name"),
        price: Number(formData.get("price")),
        color: formData.getAll("color"),
        size: formData.get("size"),

    });
    if(!validationChecker.success){
        return {
            status: false, 
            message: "Validation error",
            error: validationChecker.error.flatten().fieldErrors,
        }
    }
    return {
        status: true,
        message: "",
    }
}