"use server"
import { getTranslations } from "next-intl/server";
import z, { file, size } from "zod"



export async function AddProduct(prevState: any, formData: FormData){
  const t= await getTranslations("dashboard.addproduct.errors");
    const ValidateSchema= z.object({
    name: z.string().min(3, t("name_min")),
    price: z.coerce.number().positive(t("price")),
    size: z.string(t("size")),
    color: z.array(z.string()).min(1, t("color_min")),
    brand: z.string().min(3, t("brand_min")),
    qty: z.number().positive(t("qty")),
    type: z.string(),
    alert_qty: z.number().positive(t("alert_qty")),
    front_image: z.instanceof(File, {message: t("image")}).refine((file)=> ["PNG, JPG, JPEG, GIF, webp", t("image_type")]),
    back_image: z.instanceof(File, {message: t("image")}).refine((file)=> ["PNG, JPG, JPEG, GIF, webp", t("image_type")]),
    description: z.string().min(10, t("description")),

    

});
    const validationChecker = ValidateSchema.safeParse({
        name: formData.get("name"),
        price: Number(formData.get("price")),
        color: formData.getAll("color"),
        size: formData.get("size"),
        brand: formData.get("brand"),
        qty: formData.get("qty"),
        alert_qty: formData.get("alert_qty"),
        man_date: formData.get("man_date"),
        exp_date: formData.get("exp_date"),
        description: formData.get("description"),
        fron_image: formData.get("front_image") as File,
        back_image: formData.get("back_image") as File,
        product_type: formData.get("product_type"),


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
        
    }
}