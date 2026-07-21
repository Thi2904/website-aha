export default function The2ASection() {
    return (
        <div className="w-full">
            <img className="w-full h-[200px]" src="/frame/frame1.png" alt="" />
            <div className="w-full h-[896px] flex flex-col justify-center items-center">
                <p className="text-[100px] font-bold">THE 2A & O</p>
                <p className="text-[25px]">Asia Awards Organization will use our voice to</p>
                <p className="text-[25px]">communicate and thoughtfully promote the corporate</p>
                <p className="mb-20 text-[#C48F7F] text-[25px] font-bold">2A&O: Aspiration - Achievement - Opportunity.</p>
                <div className="flex flex-row gap-5 mx-[70px]">
                    <div className="w-[384px] h-[384px] rounded-[50%] border-[0.4px] border-[#C48F7F] relative">
                        <p className="w-[272px] absolute top-20 text-center left-15 text-[30px] font-bold text-[#C48F7F]">ASPIRATION</p>
                        <p className="w-[272px] absolute top-30 text-center left-15 mt-5 text-[15px]">Leverage the corporate aspiration - the key to the continuity of excellence and organizational morale.</p>
                        <img src="/frame/A.png" className="absolute -bottom-25 left-25" alt="" />
                    </div>
                    <div className="w-[384px] h-[384px] mt-25 rounded-[50%] border-[0.4px] border-[#C48F7F] relative">
                        <img src="/frame/A.png" className="absolute -top-25 left-25" alt="" />
                        <p className="w-[272px] absolute top-30 text-center left-15 mt-5 text-[15px]">Honor team efforts in delivering outstanding services and projects that are crucial to the global innovation and development.</p>
                        <p className="w-[272px] absolute bottom-20 text-center left-15 text-[30px] font-bold text-[#C48F7F]">ACHIEVEMENT</p>

                    </div>
                    <div className="w-[384px] h-[384px] rounded-[50%] border-[0.4px] border-[#C48F7F] relative">
                        <p className="w-[272px] absolute top-20 text-center left-15 text-[30px] font-bold text-[#C48F7F]">OPPORTUNITY</p>
                        <p className="w-[272px] absolute top-30 text-center left-15 mt-5 text-[15px]">Opportunities for business or individual to showcase the best of their work and creativities in every aspect of life.</p>
                        <img src="/frame/O.png" className="absolute -bottom-25 left-25" alt="" />
                    </div>
                </div>
            </div>
            <img className="w-full h-[200px] rotate-180" src="/frame/frame1.png" alt="" />

        </div>
    );
}