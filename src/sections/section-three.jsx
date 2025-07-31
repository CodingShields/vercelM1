const SectionFour = () => {
  return (
    <div className="max-w-[1280px] w-full flex-col items-start justify-start sm:justify-center inline-flex self-stretch  gap-[10px] h-fit  pb-24 px-16 md:px-32 lg:px-40 mx-auto ">
      <div className="self-stretch  grid grid-cols-1 lg:grid-cols-2 justify-center mx-auto	 gap-12">
        <div className="flex-col justify-center items-start flex-1 space-y-4  w-full        ">
          <div className="self-stretch justify-start text-SB_Dark_Blue text-[64px] font-bold font-[futura-pt-bold] leading-[64px] tracking-[-2.56px]  sm:text-left">
            The Power of Your One Day
          </div>
          <div className="self-stretch justify-start text-SB_Dark_Blue font-normal font-[`futura-pt`] text-[18px]  leading-6 ">
            What does one day look like for you? A morning coffee, a quick bite,
            a scroll through your phone – these moments make up our days. We
            spend, we stream, we shop. Our one day's salary covers our immediate
            needs and desires.
          </div>
          <div className=" text-SB_Dark_Blue  font-normal font-[`futura-pt`] text-[18px] self-stretch">
            But what if your one day could build something eternal?
          </div>
          <div>
            <span class="text-SB_Dark_Blue text-[18px] font-bold font-[`futura-pt`] leading-6">
              Your “One Day” can provide:
              <br />
            </span>
            <ul className="list-disc list-inside pl-2.5">
              <li class="text-SB_Dark_Blue text-[18px] font-bold font-[`futura-pt`] leading-6 tracking-tight">
                A roof and solid walls:{" "}
                <span class="text-SB_Dark_Blue text-[18px] font-normal font-[`futura-pt`] leading-6">
                  {" "}
                  A gathering place constructed with bricks protecting
                  congregations from the elements and providing a safe space to
                  worship.
                  <br />
                </span>
              </li>

              <li class="text-SB_Dark_Blue text-[18px] font-bold font-[`futura-pt`] leading-6">
                A spiritual home:{" "}
                <span class="text-SB_Dark_Blue text-[18px] font-normal font-[`futura-pt`] leading-6">
                  {" "}
                  An environment where individuals can learn, grow in their
                  faith, and thrive in Jesus.
                  <br />
                </span>
              </li>

              <li class="text-SB_Dark_Blue text-[18px] font-bold font-[`futura-pt`] leading-6">
                A vital hub for the community:{" "}
                <span class="text-SB_Dark_Blue text-[18px] font-normal font-[`futura-pt`] leading-6">
                  {" "}
                  A central point for connection, mutual support, and a beacon
                  of enduring hope.
                  <br />
                </span>
              </li>

              <li class="text-SB_Dark_Blue text-[18px] font-bold font-[`futura-pt`] leading-6">
                A lasting legacy of faith:{" "}
                <span class="text-SB_Dark_Blue text-[18px] font-normal font-[`futura-pt`] leading-6">
                  {" "}
                  A wellspring, developing leaders who will go on to plant many
                  more churches and multiply the impact.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 h-[630px] max-w-[456px] w-full p-9 flex-col items-start mx-auto gap-12  rounded-[20px] bg-[url('/images/section-three-image.jpg')] bg-cover bg-no-repeat" />
      </div>
    </div>
  );
};

export default SectionFour;
