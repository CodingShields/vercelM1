import { Play } from "lucide-react";
const SectionTwo = () => {
  return (
    <div className="flex flex-col self-stretch items-start px-6 pb-24  lg:px-[48px] lg:pb-[96px] lg:w-[1280px] ">
      <div className="bg-[#E4E4E4] flex flex-col items-start self-stretch px-[24px] py-[32px] lg:p-[72px] rounded-2xl w-full min-w-[452px] h-auto h-[436px]">
        <div className="pb-[48px]">
          <p className="font-[futura-pt] text-[#11121C] text-sm font-medium uppercase leading-normal tracking-[3.36px] min-w-[404px]">
            One Mission. One Message. One Day.
          </p>
          <div className="self-stretch justify-start">
            <span className="text-SB_Dark-Blue text-6xl font-bold font-['futura-pt-bold'] leading-[64px]">
              One Day Can Change{" "}
            </span>
            <span class="text-m1 text-6xl font-bold font-['futura-pt-bold'] leading-[64px]">
              Everything
            </span>
          </div>
        </div>
        <div className="w-full min-w-[404px] h-fit min-h-[228px] relative flex items-center justify-center pb-[48px] bg-[url('/images/section-two-image.jpg')] bg-cover bg-center bg-no-repeat xl:min-h-[540px] xl:w-[1040px] rounded-2xl">
          <button className="absolute  p-[16px] rounded-full font-futuraMed tracking-widest bg-[#11121C] w-[70px] h-[70px]">
            <Play color="white" size="auto" strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
