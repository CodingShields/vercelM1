import sectionFiveImage from "../assets/section-five-image.png";
const SectionFive = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full h-[876px] h-full  lg:px-[160px] pb-[96px] px-8">
      <div className="lg:w-[960px] w-full h-[456px] grid grid-cols-1 lg:grid-cols-2 lg:gap-[48px]  ">
        <div>
          <img
            src={sectionFiveImage}
            alt="section-five-image"
            className="rounded-2xl w-full h-full object-cover"
          />{" "}
        </div>
        <div>
          <h1
            className="whitespace-nowrap lg:text-left text-center"
            style={{
              leadingTrim: "both",
              textEdge: "cap",
              fontSize: "64px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "64px",
              letterSpacing: "-2.56px",
              fontFamily: "futura-pt-bold",
              color: "#11121C",
            }}
          >
            Join the Mission. <br /> Give One Day.
          </h1>
          <p
            className="my-[24px] text-left"
            style={{
              leadingTrim: "both",
              textEdge: "cap",
              fontFamily: "futura-pt",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            Today, we ask you to consider giving one day of your salary. Your
            single day's earnings can lay the foundation for generations of
            faith and community around the world.
          </p>
          <button
            className="mb-6 px-[32px] py-[16px] rounded-2xl font-futuraMed tracking-widest h-[61px] w-fit"
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: "600",
              background: "#EEA030",
              fontFamily: "futura-pt",
            }}
          >
            Give Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
