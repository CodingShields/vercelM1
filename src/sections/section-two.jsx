import { Play } from "lucide-react";
const SectionTwo = () => {
  return (
    <div className="self-stretch px-6 lg:px-12 py-24 inline-flex flex-col justify-center  items-start overflow-hidden max-w-[1280px] w-full mx-auto">
      <div className="bg-[#E4E4E4] flex flex-col items-start self-stretch gap-[32px]  py-8 px-6 md:px-12 md:p-[72px] rounded-2xl mx-auto  min-h-fit max-h-[800px] w-full">
        <div className="flex flex-col items-start gap-2 ">
          <p className="font-['futura-pt-bold']  text-[#11121C] text-sm   uppercase leading-6  tracking-[3.36px] text-center  ">
            One Mission. One Message. One Day.
          </p>
          <p className="text-SB_Dark-Blue text-[64px] font-[futura-pt-bold] leading-[64px] self-stretch justify-start tracking-[-2.56px] ">
            One Day Can Change{" "}
            <span className="text-m1 text-[64px] font-[futura-pt-bold] leading-[64px]">
              Everything
            </span>
          </p>
        </div>
        <div
          style={{ paddingTop: "56.25%", position: "relative", width: "100%" }}
        >
          <iframe
            src="https://player.vimeo.com/video/1106304001?badge=0&autopause=0&player_id=0&app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
            title="M1 One Day Promo"
          ></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
