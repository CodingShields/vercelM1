const SectionOne = () => {
  return (
    <div className="self-stretch px-6 lg:px-12 py-24 inline-flex flex-col justify-center  items-start overflow-hidden max-w-[1280px] w-full mx-auto">
      <div className="self-stretch h-[812px] md:h-[700px] px-6 py-[236px] md:px-16 md:py-28 rounded-[20px] w-full flex flex-col md:justify-end md:items-end justify-end items-center gap-8 overflow-hidden  bg-[url('/images/mobile-section-one-image.jpg')] md:bg-[url('/images/section-one-image.jpg')] bg-cover bg-no-repeat bg-center aspect-9/16 lg:aspect-16/9 ">
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
  );
};

export default SectionOne;
