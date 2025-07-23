import { Play } from "lucide-react";
const SectionTwo = () => {
  return (
    <div className="flex flex-col items-start gap-[64px] self-stretch px-[24px] pb-[96px] w-full max-w-[500px] h-auto max-h-[632px] mx-auto">
      <div className="bg-[#E4E4E4] py-[32px] px-[24px] w-full max-w-[452px] h-auto max-h-[536px] self-stretch flex flex-col items-start gap-[48px] rounded-[20px]">
        <div className="flex flex-col items-start max-w-[404px] w-full max-h-[196px] ">
          <p
            style={{
              leadingTrim: "both",
              textEdge: "cap",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "3.36px",
              textTransform: "uppercase",
            }}
            className=" text-[#11121C] text-[14px]  font-futura-pt uppercase leading-[24px] tracking-[3.36px] "
          >
            One Mission. One Message. One Day.
          </p>

          <p className="text-SB_Dark_Blue text-[56px] sm:text-[64px] font-bold font-['futura-pt-bold'] leading-[56px] self-stretch justify-start max-h-[171px] h-auto w-full max-w-[404px]">
            One Day Can Change{" "}
            <span class="text-m1 text-6xl font-bold font-['futura-pt-bold'] leading-[56px]">
              Everything
            </span>
          </p>
        </div>

        <div className="w-full max-w-[404px] h-[228px]   relative flex items-center justify-center  bg-[url('/images/section-two-image.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl self-stretch aspect-16/9">
          <button className="p-[16px] rounded-full font-futuraMed tracking-widest bg-SB_Dark_Blue flex items-center justify-center w-auto max-w-[70px] h-auto max-h-[68px]">
            <Play color="white" size="auto" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
