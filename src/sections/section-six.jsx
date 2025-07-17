import sectionOneImage from "../assets/section-one-image.jpg";
import instagramIcon from "../assets/icons/instagram-icon.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";
import shareIcon from "../assets/icons/share-icon.svg";
const SectionSix = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[800px]  lg:px-[160px] pb-[96px] mt-48 px-8">
      <div className="lg:px-[160px] mb-[48px] text-center px-[16px] ">
        <h1
          className="mb-[24px] mx-auto "
          style={{
            leadingTrim: "both",
            textEdge: "cap",
            fontFamily: "futura-pt-bold",
            fontSize: "64px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "64px",
            letterSpacing: "-2.56px",
            color: "#11121C",
          }}
        >
          Share the Mission.
        </h1>
        <p
          className=" mx-auto px-[8px] w-[452px] h-[60px] self-stretch lg:text-center whitespace-break-spaces "
          style={{
            leadingTrim: "both",
            textEdge: "cap",
            fontFamily: "futura-pt",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "20px",
            color: "#11121C",
          }}
        >
          Help us amplify the message of "One Mission, One Message, One Day."{" "}
          Share this incredible opportunity with your friends, family, and
          social networks.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[32px] lg:p-[32px] rounded-2xl justify-center items-center bg-[#FFFFFF] lg:w-[960px] min-w-[408px] w-full py-4">
        <div className=" w-full">
          <h1
            className="border-b-[3px] border-black pb-[10px] lg:text-left lg:whitespace-nowrap text-center "
            style={{
              leadingTrim: "both",
              textEdge: "cap",
              fontFamily: "futura-pt-bold",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "40px",
              letterSpacing: "-1.6px",
              color: "#11121C",
            }}
          >
            Spread the Word
          </h1>

          <p
            className="my-[16px] lg:text-left text-center"
            style={{
              leadingTrim: "both",
              textEdge: "cap",
              fontFamily: "futura-pt",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24px",
              color: "#11121C",
            }}
          >
            Click the graphic to download and share, or click an icon below to
            directly share to your socials.
          </p>
          <div className="flex flex-row gap-[16px] lg:justify-start justify-center items-center">
            <img
              src={facebookIcon}
              alt="facebook-icon"
              className="w-[24px] h-[24px]"
            />
            <img
              src={instagramIcon}
              alt="instagram-icon"
              className="w-[24px] h-[24px]"
            />
            <img
              src={shareIcon}
              alt="share-icon"
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>
        <div>
          <img
            src={sectionOneImage}
            alt="section-one-image"
            className="rounded-2xl max-w-[456px] min-h-[250px] object-cover self-stretch h-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default SectionSix;
