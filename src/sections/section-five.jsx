import sectionFiveImage from "../assets/section-five-image.png";
const SectionFive = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full mx-auto px-[24px] sm:px-[48px] lg:px-[160px] pb-[96px] max-w-[1280px] h-full">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[24px] sm:gap-[32px] lg:gap-[48px] w-full">
        <img
          src={sectionFiveImage}
          alt="section-five-image"
          className="rounded-2xl w-full max-w-[456px] h-auto object-cover"
        />
        <div className="w-full max-w-[456px] flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="pt-8 text-[48px] leading-[48px] font-bold font-[futura-pt-bold] text-[#11121C]">
            Join the Mission. <br /> Give One Day.
          </h1>
          <p className="pt-4 text-[18px] leading-[24px] font-[futura-pt] text-[#11121C]">
            Today, we ask you to consider giving one day of your salary. Your
            single day's earnings can lay the foundation for generations of
            faith and community around the world.
          </p>
          <button className="mt-[24px] px-[32px] py-[16px] rounded-2xl tracking-widest h-[61px] w-fit bg-[#EEA030] text-white text-[20px] font-semibold font-[futura-pt]">
            Give Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
