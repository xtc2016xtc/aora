import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";

const Home = () => {
    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[496px]">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        alt="logo"
                        width={1000}
                        height={1000}
                        priority={true}
                        className="mb-12 h-10 w-fit"
                    />

                    <PatientForm />

                    <div className="text-14-regular mt-20 flex justify-between">
                        <p>
                            © 2024 医疗预约
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home