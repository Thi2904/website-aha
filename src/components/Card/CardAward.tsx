export default function CardAward({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#222D43] h-[500px] w-[250px] flex flex-col justify-between">
        <div className="bg-[url('/frame/Frame9.png')] h-full w-full">
            <p className="text-[30px] font-normal  uppercase bg-[url('/BackgroundImage/rose-gold-metal-texture-background.jpg')] bg-cover bg-center bg-no-repeat bg-clip-text text-transparent p-4">{title}</p>
        </div>
        <div>
             <p className="text-sm mb-6 font-normal bg-[url('/BackgroundImage/rose-gold-metal-texture-background.jpg')] bg-cover bg-center bg-no-repeat bg-clip-text text-transparent p-4">{description}</p>
        </div>
    </div>
  );
}