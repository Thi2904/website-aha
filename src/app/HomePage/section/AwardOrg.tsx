export default function AwardOrg() {
    return (
        <div className="flex flex-col justify-center w-full min-h-screen">
            <div className="w-full h-[200px] bg-white relative">
                <img src="/frame/upper.png" className="w-full h-[200px] absolute top-0" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center gap-10 w-[971px] h-[120px]">
                    <img src="/AHALogo/AAO.svg" alt="" />
                    <p className="text-[50px] font-bold text-[#111826]">ASIA AWARDS ORGANIZATION</p>
                </div>
                <p className="w-[1050px] h-[104px] mt-10 text-[22px]">
                    <b>Asia Awards Organization (AAO)</b> –
                    A Singapore-based enterprise that explores, develops, and promotes creativity and excellence across various sectors of society. It currently celebrates outstanding achievements through two signature award platforms: the
                    <b>Asia Architecture Design Awards (AADA) and the Asia Hospitality Awards (AHA)</b>.
                </p>
                <div className="bg-[url('/BackgroundImage/new.jpg')] block w-[1050px] h-[600px] mt-10 bg-no-repeat bg-cover bg-center rounded-xl"></div>
                <button className="my-10 w-[323px] h-[44px] bg-[#C48F7F] text-white text-[18px]">ABOUT THE ORGANIZER</button>
            </div>
            <div className="w-full h-[200px] bg-white relative">
                <img src="/frame/lower.png" className="w-full h-[200px] absolute bottom-0" alt="" />
            </div>
        </div>
    );
}