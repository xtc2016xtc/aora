"use client"
import {Form} from "@/components/ui/form";
import CustomFormField from "@/components/compentsCustom/CustomFormField";
import SubmitButton from "@/components/button/SubmitButton";
import React, {useState} from "react";

const PatientForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    return (
        /*@ts-ignore*/
        <Form>
            <form className="flex-1 space-y-6">
                <section className="mb-12 space-y-4">
                    <h1 className="header">你好👋</h1>
                    <p className="text-dark-700">可以开始预约医生了.</p>
                </section>

                <CustomFormField/>
                <CustomFormField/>
                <CustomFormField/>

                <SubmitButton isLoading={isLoading}>开始</SubmitButton>
            </form>
        </Form>
    )
}

export default PatientForm