import Image from "next/image";
import PasskeyModel from "@/components/Keypassmodel/PasskeyModel";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";

const Register = ({ searchParams }: SearchParamProps) => {
    const isAdmin = searchParams?.admin === "true";
    return (
        <div className="flex h-screen max-h-screen">
            {isAdmin && <PasskeyModel/>}
            <section className="remove-scrollbar scrollbar-hide container my-auto">
                <div className="sub-container max-w-[496px]">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        alt="logo"
                        width={1000}
                        height={1000}
                        priority={true}
                        className="mb-12 h-10 w-fit"
                    />
                    <RegisterForm />

                    <div className="text-14-regular mt-20 flex justify-between">
                        <p className="justify-items-end text-dark-600 xl:text-left">
                            © 2024 医疗预约
                        </p>
                        <Link href="/?admin=true" className="text-green-500">
                            管理
                        </Link>
                    </div>
                </div>
            </section>

            <Image
                src="/assets/images/register-img.png"
                height={1000}
                width={1000}
                alt="门诊"
                className="side-img max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            />
        </div>
    )
}
export default Register