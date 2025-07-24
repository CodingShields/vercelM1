import { Play } from "lucide-react";
const SectionTwo = () => {
  return (
    <div className="flex flex-col mx-auto  justify-start gap-[64px]  sm:px-[48px] pb-[96px] max-w-[500px] sm:h-[896px] min-h-full sm:w-[1280px] w-auto sm:min-w-full">
      <div className="bg-[#E4E4E4] flex flex-col items-start self-stretch gap-[32px]  py-[32px] px-[24px] md:p-[72px] rounded-2xl mx-auto w-full max-w-[1184px] min-h-fit max-h-[800px]">
        <div className="flex flex-col items-start gap-[8px] max-w-[404px] sm:max-w-[960px] ">
          <p className="font-futura-pt text-[#11121C] text-[14px]  font-medium uppercase leading-[8px] tracking-[3.36px] ">
            One Mission. One Message. One Day.
          </p>
          <p className="text-SB_Dark-Blue text-6xl font-bold font-['futura-pt-bold'] leading-[64px] self-stretch justify-start ">
            One Day Can Change{" "}
            <span class="text-m1 text-6xl font-bold font-['futura-pt-bold'] leading-[64px]">
              Everything
            </span>
          </p>
        </div>

        <div className="w-full min-h-[228px]  h-full sm:h-[540px] relative flex items-center justify-center  bg-[url('/images/section-two-image.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl self-stretch aspect-16/9">
          <button className="absolute  p-[16px] rounded-full font-futuraMed tracking-widest bg-[#11121C] w-[70px] h-[70px]">
            <Play color="white" size="auto" strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
