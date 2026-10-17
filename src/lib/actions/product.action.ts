"use server"
import z, { file, size } from "zod"



export function AddProduct(prevState: any, formData: FormData){
    const ValidateSchema= z.object({
    name: z.string().min(3, prevState.validationMessages.name_min),
    price: z.number().positive(prevState.validationMessages.price),
    size: z.string(prevState.validationMessages.size),
    color: z.array(z.string()).min(1, prevState.validationChecker.color_min),
    brand: z.string().min(3, prevState.validationMessages.brans),
    qty: z.number().positive(prevState.validationMessages.qty),
    alert_qty: z.number().positive(prevState.validationMessages.alert_qty),
    front_image: z.instanceof(File, {message: prevState.validationMessages.image}),
    back_image: z.instanceof(File, {message: prevState.validationMessages.image}).refine((file)=> ["PNG, JPG, JPEG, GIF, webp"]),
    description: z.string().min(10, prevState.validationMessages.description),

    

});
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
            validationMessages: "",
            error: validationChecker.error.flatten().fieldErrors,
        }
    }
    return {
        status: true,
        message: "",
        validationMessages: "",
    }
}