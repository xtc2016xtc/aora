"use client"
import {Form} from "@/components/ui/form";
import CustomFormField from "@/components/compentsCustom/CustomFormField";
import SubmitButton from "@/components/button/SubmitButton";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React, {useState} from "react";
import { z } from "zod"
const formSchema = z.object({
    username: z.string().min(2,{
        message:"最大输入俩个字符"
    })
})

export enum FormFieldType {
    INPUT="input",
}

const PatientForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
                <section className="mb-12 space-y-4">
                    <h1 className="header">你好👋</h1>
                    <p className="text-dark-700">可以开始预约医生了.</p>
                </section>

                <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="username"
                    platform="账户"
                />

                <SubmitButton isLoading={isLoading}>开始</SubmitButton>
            </form>
        </Form>
    )
}

export default PatientForm