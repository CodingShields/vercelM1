const SectionFour = () => {
  return (
    <div className="w-full lg:px-[72px] xl:px-[160px] pb-[96px] px-[24px] flex-col items-start justify-start lg:justify-center inline-flex self-stretch  gap-[10px]  max-h-[1301px] lg:max-h-[726px] h-auto mx-auto">
      <div className="self-stretch  flex flex-col lg:flex-row  justify-start items-start sm:items-center	 gap-[64px]  sm:gap-[48px]  h-auto  xl:min-h-[527px] w-full sm:max-w-[960px] max-w-[452px] mx-auto ">
        <div className="flex flex-col justify-center items-center flex-1   w-full min-h-[527px] max-w-[456px] md:max-w-[736px] lg:max-w-[456px] h-auto">
          <div className="self-stretch justify-start text-SB_Dark_Blue text-[56px] sm:text-[64px] font-bold font-[futura-pt-bold] leading-[64px]  max-h-[107px] h-auto tracking-[-2.56px] md:w-[600px] lg:w-full  mx-auto text-center lg:text-left">
            The Power of Your One Day
          </div>
          <div className="self-stretch justify-start text-SB_Dark_Blue text-md font-normal font-[`futura-pt`] text-[18px]  max-w-[456px] w-full leading-6 min-h-[84px] sm:max-h-[252px] h-auto pt-[32px] pb-[24px] mx-auto">
            What does one day look like for you? A morning coffee, a quick bite,
            a scroll through your phone – these moments make up our days. We
            spend, we stream, we shop. Our one day's salary covers our immediate
            needs and desires.
          </div>
          <div className=" text-SB_Dark_Blue  font-normal font-[`futura-pt`] text-[18px] self-stretch text-center pb-[24px]">
            But what if your one day could build something eternal?
          </div>
          <div className="max-h-[252px] h-auto max-w-[452px]  w-full ">
            <span class="text-SB_Dark_Blue text-[18px] font-bold font-[`futura-pt`] leading-6">
              Your “One Day” can provide:
              <br />
            </span>
            <ul className="list-disc list-outside pl-10">
              <li class="text-SB_Dark_Blue text-[18px] font-bold font-[`futura-pt`] leading-normal tracking-tight">
                A roof and solid walls:{" "}
                <span class="text-SB_Dark_Blue text-[18px] font-normal font-[`futura-pt`] leading-normal">
                  {" "}
                  A gathering place constructed with bricks protecting
                  congregations from the elements and providing a safe space to
                  worship.
                  <br />
                </span>
              </li>

              <li class="text-SB_Dark_Blue text-[18px] font-bold font-[`futura-pt`] leading-normal">
                A spiritual home:{" "}
                <span class="text-SB_Dark_Blue text-[18px] font-normal font-[`futura-pt`] leading-normal">
                  {" "}
                  An environment where individuals can learn, grow in their
                  faith, and thrive in Jesus.
                  <br />
                </span>
              </li>

              <li class="text-SB_Dark_Blue text-[18px] font-bold font-[`futura-pt`] leading-normal">
                A vital hub for the community:{" "}
                <span class="text-SB_Dark_Blue text-[18px] font-normal font-[`futura-pt`] leading-normal">
                  {" "}
                  A central point for connection, mutual support, and a beacon
                  of enduring hope.
                  <br />
                </span>
              </li>

              <li class="text-SB_Dark_Blue text-[18px] font-bold font-[`futura-pt`] leading-normal">
                A lasting legacy of faith:{" "}
                <span class="text-SB_Dark_Blue text-[18px] font-normal font-[`futura-pt`] leading-normal">
                  {" "}
                  A wellspring, developing leaders who will go on to plant many
                  more churches and multiply the impact.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex h-[630px] p-9 flex-col items-start gap-6  rounded-[20px] bg-[url('/images/section-three-image.jpg')] bg-cover bg-no-repeat max-w-[456px] w-full mt-[48px]" />
      </div>
    </div>
  );
};

export default SectionFour;
