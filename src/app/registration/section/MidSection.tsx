export default function MidSection() {
    return (
        <div className="bg-white flex flex-row justify-center items-center">
            <div className="w-[1060px] h-[160px] mx-[10px] my-[35px] bg-[url('/BackgroundImage/background2.png')] bg-cover bg-center bg-no-repeat">
                <div className="flex flex-row justify-center items-center py-10">
                    <div className="w-[672px] h-[84px]">
                        <p className="uppercase weight-100 text-[25px] text-[#C48F7F] text-center">Get your</p>
                        <p className="uppercase font-bold text-[25px] text-[#C48F7F] text-center">submission guidelines</p>
                    </div>
                    <button className="text-[#C48F7F] text-[13px] border border-[1px] h-[44px] border-[#C48F7F] text-center px-[80px]">Download Now</button>
                </div>
            </div>
        </div>
    );
}