import sectionFiveImage from "/images/section-five-image.png";
const SectionFive = () => {
  return (
    <div className="w-full flex-col items-center justify-start sm:justify-center inline-flex flex-1self-stretch  gap-x-2.5	   mx-auto pb-24  lg:px-40 md:px-14 px-6">
      <div className="self-stretch  grid grid-cols-1 lg:grid-cols-2 sm:items-center justify-center mx-auto	 gap-12">
        <img
          src={sectionFiveImage}
          alt="section-five-image"
          className="rounded-2xl w-full max-w-[456px] h-[456px] object-cover flex-1 flex-col items-start flex gap-6"
        />
        <div className="w-full max-w-[456px] flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6">
          <h1 className="text-[64px] leading-[64px] font-[futura-pt-bold] text-SB_Dark-Blue tracking-[-2.56px]">
            Join the Mission. <br /> Give One Day.
          </h1>
          <p className="text-[18px]  font-[futura-pt] text-[#11121C] leading-6 ">
            Today, we ask you to consider giving one day of your salary. Your
            single day's earnings can lay the foundation for generations of
            faith and community around the world.
          </p>
          <button className="px-8 py-6 rounded-2xl active:translate-y-1 transition-all ease-in-out duration-100  tracking-widest flex justify-center items-center bg-[#EEA030] text-white text-[20px]  font-[futura-pt-medium] gap-2.5 max-h-[61px]">
            <a
              href="https://ppay.co/AWP5iOl5e_k"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "600" }}
              className="select-none "
            >
              Give Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
