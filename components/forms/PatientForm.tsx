"use client"
import {Form} from "@/components/ui/form";
import CustomFormField from "@/components/compentsCustom/CustomFormField";
import SubmitButton from "@/components/button/SubmitButton";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React, {useState} from "react";
import { z } from "zod"
import {UserFormValidation} from "@/lib/validation";


export enum FormFieldType {
    INPUT="input",
    TEXTAREA = "textarea",
    PHONE_INPUT="phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
}

const PatientForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email:"",
            phone:"",
        },
    })

    function onSubmit(values: z.infer<typeof UserFormValidation>) {
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
                    name="name"
                    label="账户"
                    placeholder="Admin bear"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="name"
                />
                <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="email"
                    label="接收信息的邮件"
                    placeholder="adminBear@qq.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="email"
                />
                <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.PHONE_INPUT}
                    name="phone"
                    label="电话号码"
                    placeholder="(555) 123-4567"
                />

                <SubmitButton isLoading={isLoading}>前往预约</SubmitButton>
            </form>
        </Form>
    )
}

export default PatientForm