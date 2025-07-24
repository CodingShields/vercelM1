import sectionFiveImage from "../assets/section-five-image.png";
const SectionFive = () => {
  return (
    <div className="flex flex-row items-start justify-start w-auto mx-auto lg:px-[160px] pb-0 sm:pb-[96px] px-[24px] max-w-[500px] h-auto min-h-[800px] overscroll-contain">
      <div className="lg:w-[960px] max-w-[452px] w-full max-h-[456px] h-full grid grid-cols-1 lg:grid-cols-2 lg:gap-[48px]  ">
        <img
          src={sectionFiveImage}
          alt="section-five-image"
          className="rounded-2xl w-full h-full object-cover"
        />{" "}
        <h1
          className=" lg:text-left text-center w-full pt-8"
          style={{
            leadingTrim: "both",
            textEdge: "cap",
            fontSize: "48px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "48px",

            // lineHeight: "64px",
            letterSpacing: "-2.56px",
            fontFamily: "futura-pt-bold",
            color: "#11121C",
          }}
        >
          Join the Mission. <br />
          Give One Day.
        </h1>
        <p
          className="pt-4 text-left"
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
          single day's earnings can lay the foundation for generations of faith
          and community around the world.
        </p>
        <button
          className="mt-[24px] px-[32px] py-[16px] rounded-2xl font-futuraMed tracking-widest h-[61px] w-fit mx-auto"
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
  );
};

export default SectionFive;
