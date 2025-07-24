const SectionFour = () => {
  return (
    <div className="w-full max-w-[500px] sm:max-w-[1280px] lg:px-[72px] xl:px-[160px] pb-[96px] px-[24px] flex-col items-start justify-start inline-flex self-stretch  gap-[10px]  max-h-[1301px] xl:max-h-[726px] h-auto mx-auto">
      {/* <div className="self-stretch  flex flex-col xl:flex-row  justify-start items-start sm:items-center	  gap-[48px]  h-auto max-h-[1205px] xl:max-h-[630px] w-full xl:max-w-[960px] max-w-[452px] overflow-hidden"> */}
      <div className="self-stretch  flex flex-col lg:flex-row  justify-start items-start sm:items-center	  gap-[48px]  h-auto max-h-[1205px] xl:max-h-[630px] w-full sm:max-w-[960px] max-w-[452px] mx-auto ">
        <div className="flex flex-col justify-center items-center gap-10 flex-1   w-full max-h-[527px] max-w-[456px] md:max-w-[920] lg:max-w-[456px] h-full min-h-max	">
          <h2 className="self-stretch justify-start text-SB_Dark_Blue text-[64px] font-bold font-[futura-pt-bold] leading-[64px]  max-h-[107px] h-auto tracking-[-2.56px]">
            The Power of Your One Day
          </h2>
          <p className="self-stretch justify-start text-SB_Dark_Blue text-md font-normal font-[`futura-pt`] text-[18px]  max-w-[456px] w-full leading-6 min-h-[84px] h-full ">
            What does one day look like for you? A morning coffee, a quick bite,
            a scroll through your phone – these moments make up our days. We
            spend, we stream, we shop. Our one day's salary covers our immediate
            needs and desires.
          </p>
          <p className=" text-SB_Dark_Blue  font-normal font-[`futura-pt`] text-[18px] self-stretch mt-4 text-center">
            But what if your one day could build something eternal?
          </p>
          <div className="min-h-[252px] h-auto max-w-[452px]  w-full ">
            <span class="text-SB_Dark_Blue text-md font-bold font-[`futura-pt`] leading-6">
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
        <div className="flex h-[630px] p-9 flex-col items-start gap-6  rounded-[20px] bg-[url('/images/section-three-image.jpg')] bg-cover bg-no-repeat max-w-[456px] w-full mt-[48px]" />
      </div>
    </div>
  );
};

export default SectionFour;
