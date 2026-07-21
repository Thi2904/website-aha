export default function TheAcco() {
    return (
        <>
            <div className="w-full h-[850px] bg-[url('/background/img1.png')] bg-no-repeat bg-cover bg-center">
                <div className="flex flex-col justify-center gap-10 items-center">
                    <p className="text-[100px] mt-20 bg-[url('/background/img2.jpg')] bg-no-repeat bg-cover bg-center bg-clip-text text-transparent">THE ACCOLADES</p>
                    <p className="text-[#C48F7F] text-[20px] w-[950px] text-center">The Asia Awards Organization is proud to headline two major categories: <b>Architecture Design and Asia Hospitality Awards.</b></p>
                    <div className="flex flex-row justify-center items-center ">
                        <div className="w-[350px] h-[350px] bg-[#A67F56] text-[#F3F3F3] mr-10 uppercase text-center text-[40px] pt-15 font-bold">Asia Architecture Design Awards</div>
                        <div className="w-[350px] h-[350px] bg-[#C48F7F] text-[#222D43] uppercase text-center text-[40px] pt-15 font-bold">Asia Hospitality Awards</div>
                    </div>
                </div>
            </div>
            <img className="w-full rotate-180" src="/frame/upper1.png" alt="" />
        </>

    );
}