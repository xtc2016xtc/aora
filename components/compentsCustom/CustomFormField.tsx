"use client"
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Control} from "react-hook-form";
import {FormFieldType} from "@/components/forms/PatientForm";

interface CustomProps {
    control: Control<any>,
    name: string,
    platform:string,
    fieldType:FormFieldType
}

const CustomFormField = ({control,name,platform,fieldType}:CustomProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{name}</FormLabel>
                    <FormControl>
                        <Input placeholder={platform} {...field} />
                    </FormControl>
                    <FormDescription>
                        This is your public display name.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
export default CustomFormField