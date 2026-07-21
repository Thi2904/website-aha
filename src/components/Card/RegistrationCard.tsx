type Props = {
    number: string;
    title: string;
    description?: string;

}
export default function RegistrationCard({ number, title, description }: Props) {
    return (
        <div className="relative ml-20">
            <span className="text-[#F4DDD5] text-[80px] absolute -top-13 -left-7">{number}</span>
            <div className="bg-[#C48F7F] min-w-[520px] h-[91px]">
                <p className="text-[#F4DDD5] text-[30px] text-center uppercase font-normal">{title}</p>

            </div>
            <div className="border-[#C48F7F] max-w-[408px] min-h-[61px] border border-[1px] ml-20">
                <p className="text-[13px] mx-[24px] my-[17px] text-white">{description}</p>
            </div>
        </div>
    );
}