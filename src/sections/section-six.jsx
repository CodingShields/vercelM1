import sectionOneImage from "../../public/images/section-one-image.jpg";
import instagramIcon from "../assets/icons/instagram-icon.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";
import shareIcon from "../assets/icons/share-icon.svg";
const SectionSix = () => {
  const openFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);

    // Try to open the Facebook app
    window.location.href = `fb://facewebmodal/f?href=https://www.facebook.com/sharer/sharer.php?u=${url}`;
  };
  return (
    <div className="w-full px-[24px] sm:px-[48px] lg:px-[136px] flex flex-col items-center justify-start gap-[10px] pb-[96px] mx-auto max-w-[1280px]">
      <div className="text-center max-w-[960px] w-full mb-[48px]">
        <h1
          className="sm:mb-[24px] mx-auto "
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
          className="  max-w-[640px] h-auto max-h-[36px] w-full self-stretch text-center mx-auto "
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
          Help us amplify the message of "One Mission, One Message, One Day."{" "}
          Share this incredible opportunity with your friends, family, and
          social networks.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[32px] bg-white rounded-2xl justify-center items-center w-full max-w-[960px] p-[32px] mt-4 sm:mt-0">
        <div className="w-full max-w-[456px]">
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
            className="my-[16px] lg:text-left text-center "
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
            <button
              onClick={openFacebookShare}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookIcon}
                alt="facebook-icon"
                className="w-[24px] h-[24px]"
              />
            </button>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="instagram-icon"
                className="w-[24px] h-[24px]"
              />
            </a>
            <a
              href="/images/Sagebrush-m1Day"
              download={"Sagebrush-m1Day.jpg"}
              rel="noopener noreferrer"
            >
              <img
                src={shareIcon}
                alt="share-icon"
                className="w-[24px] h-[24px]"
              />
            </a>
          </div>
        </div>
        <img
          src={sectionOneImage}
          alt="section-one-image"
          className="rounded-2xl w-[388px]  max-h-[218px] sm:max-w-[456px] object-cover self-stretch h-auto mx-auto"
        />
      </div>
    </div>
  );
};
export default SectionSix;
