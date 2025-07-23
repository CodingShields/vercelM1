import sectionThreeImage from "../../public/images/section-three-image.jpg";

const SectionFour = () => {
  return (
    <div className="w-[1280px] px-[160px] pb-[96px] flex flex-col items-start gap-[10px]  max-h-[726px] h-auto mx-auto">
      <div className="self-stretch columns-2 flex   items-center	  gap-[48px]  h-auto max-h-[630px] w-full max-w-[960px] ">
        <div className="flex flex-col justify-center items-start gap-6 flex-1 basis-0 grow-0 w-full max-w-[456px] h-auto">
          <div className="self-stretch justify-start text-SB_Dark_Blue text-[64px] font-bold font-[futura-pt-bold] leading-[64px]  max-h-[107px] w-full h-full pb-[24px]">
            The Power of Your One Day
          </div>
          <div className="self-stretch justify-start text-SB_Dark_Blue text-md font-normal font-[`futura-pt`] leading-normal min-h-full h-[84px] min-h-auto pb-[24px] w-[456px] ">
            What does one day look like for you? A morning coffee, a quick bite,
            a scroll through your phone – these moments make up our days. We
            spend, we stream, we shop. Our one day's salary covers our immediate
            needs and desires.
          </div>
          <div className=" text-SB_Dark_Blue text-md font-normal font-[`futura-pt`] leading-normal h-[12px] pb-[24px]  ">
            But what if your one day could build something eternal?
          </div>
          <div>
            <span class="text-SB_Dark_Blue text-md font-bold font-[`futura-pt`] leading-normal">
              Your “One Day” can provide:
              <br />
            </span>
            <ul className="list-disc list-outside pl-6">
              <li class="text-SB_Dark_Blue text-md font-bold font-[`futura-pt`] leading-normal tracking-tight">
                A roof and solid walls:{" "}
                <span class="text-SB_Dark_Blue text-md font-normal font-[`futura-pt`] leading-normal">
                  {" "}
                  A gathering place constructed with bricks protecting
                  congregations from the elements and providing a safe space to
                  worship.
                  <br />
                </span>
              </li>

              <li class="text-SB_Dark_Blue text-md font-bold font-[`futura-pt`] leading-normal">
                A spiritual home:{" "}
                <span class="text-SB_Dark_Blue text-md font-normal font-[`futura-pt`] leading-normal">
                  {" "}
                  An environment where individuals can learn, grow in their
                  faith, and thrive in Jesus.
                  <br />
                </span>
              </li>

              <li class="text-SB_Dark_Blue text-md font-bold font-[`futura-pt`] leading-normal">
                A vital hub for the community:{" "}
                <span class="text-SB_Dark_Blue text-md font-normal font-[`futura-pt`] leading-normal">
                  {" "}
                  A central point for connection, mutual support, and a beacon
                  of enduring hope.
                  <br />
                </span>
              </li>

              <li class="text-SB_Dark_Blue text-md font-bold font-[`futura-pt`] leading-normal">
                A lasting legacy of faith:{" "}
                <span class="text-SB_Dark_Blue text-md font-normal font-[`futura-pt`] leading-normal">
                  {" "}
                  A wellspring, developing leaders who will go on to plant many
                  more churches and multiply the impact.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex sm:h-[630px] p-9 flex-col items-start gap-6  rounded-[20px] bg-[url('/images/section-three-image.jpg')] bg-cover bg-no-repeat max-w-[456px] w-full" />
      </div>
    </div>
  );
};

export default SectionFour;
