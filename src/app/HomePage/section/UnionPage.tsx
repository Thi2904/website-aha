import CardUnion from "@/src/components/Card/CardUnion";
import { PenLine, ListChecks, CreditCard, FileText, FileSearch } from "lucide-react";


const steps = [
    { icon: <PenLine />, description: "Create your account", image: "/frame/Union.png" },
    { icon: <ListChecks />, description: "Select your nomination category", image: "/frame/Union2.png" },
    { icon: <CreditCard />, description: "Payment of fees", image: "/frame/Union2.png" },
    { icon: <FileText />, description: "Prepare your entry documents", image: "/frame/Union2.png" },
    { icon: <FileSearch />, description: "Review and submit your entry", image: undefined },
];
export default function UnionPage() {
    return (
        <div className="pt-10 w-full min-h-screen flex flex-col justify-center items-center gap-5 bg-[url('/BackgroundImage/harmonyBG.jpg')] bg-no-repeat bg-cover bg-center">
            <p
                className="text-[60px] leading-[1.13] tracking-[1.8px] font-normal align-middle uppercase bg-[url('/BackgroundImage/rose-gold-metal-texture-background.jpg')] bg-no-repeat bg-cover bg-center text-transparent bg-clip-text"
                style={{
                    color: 'linear-gradient(90deg, #F4DDD5 0%, #C48F7F 100%)'
                }}
            >
                REGISTRATION PROCESS
            </p>

            <div className="mt-20 flex flex-row items-center">
                {steps.map((step, i) => (
                    <CardUnion
                        key={i}
                        stepNumber={i + 1}
                        icon={step.icon}
                        description={step.description}
                        image={step.image}
                        isFirst={i === 0}
                        zIndex={steps.length - i}
                    />
                ))}
            </div>

            <button className="w-[261px] h-[44px] bg-[#C48F7F] text-white border border-[1px] border-white uppercase my-10">Resigter now</button>
        </div>
    );
}