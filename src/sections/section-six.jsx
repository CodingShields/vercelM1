import instagramIcon from "../assets/icons/instagram-icon.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";
import shareIcon from "../assets/icons/share-icon.svg";
const SectionSix = () => {
  const handleImageFileShare = async () => {
    try {
      const response = await fetch("/images/Sagebrush-m1Day-share-image.jpg"); // Relative path to public image
      const blob = await response.blob();
      const file = new File([blob], "Sagebrush-m1Day-share-image.jpg", {
        type: blob.type,
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "One Mission, One Message, One Day",
          text: "Join us!",
          files: [file],
        });
        console.log("Image shared!");
      } else {
        alert("File sharing not supported on this device.");
      }
    } catch (err) {
      console.error("Error sharing image file:", err);
    }
  };

  const openFacebookShare = () => {
    const pageUrl = "https://sagebrush.church/m1day";
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        pageUrl
      )}`,
      "_blank"
    );
  };

  return (
    <div className=" flex-col items-start justify-start lg:justify-center inline-flex self-stretch  gap-2.5	   mx-auto pb-24  sm:px-40  px-6 max-w-[1280px] w-full">
      <div>
        <div className="text-center  pb-12  flex flex-col justify-center items-center self-stretch gap-6 px-40">
          <h1 className="font-[futura-pt-bold] text-SB_Dark-Blue tracking-[-2.56px] text-[64px] leading-[64px] text-center text-wrap">
            Share the Mission.
          </h1>
          <p className=" self-stretch text-center text-SB_Dark-Blue text-lg leading-6 font-[futura-pt]">
            Help us amplify the message of "One Mission, One Message, One Day."{" "}
            Share this incredible opportunity with your friends, family, and
            social networks.
          </p>
        </div>

        <div className="columns-2 flex justify-center items-center  gap-8 bg-SB_White rounded-2xl  w-full p-8 ">
          <div className=" flex flex-col flex-1 gap-6 items-start">
            <div className="gap-6 flex flex-col items-center self-stretch pb-6">
              <h1 className=" xl:text-left w-full  text-center text-5xl font-[futura-pt-bold] text-SB_Dark-Blue leading-8 border-b-2 border-solid border-[#11121C] pb-4 tracking-[-1.6px]">
                Spread the Word
              </h1>

              <p className="lg:text-left text-center text-SB_Dark-Blue text-lg font-[futura-pt] leading-6">
                Click the graphic to download and share, or click an icon below
                to directly share to your socials.
              </p>
            </div>

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
              <button onClick={handleImageFileShare}>
                <img
                  src={shareIcon}
                  alt="share-icon"
                  className="w-[24px] h-[24px]"
                />
              </button>
            </div>
          </div>{" "}
          <a
            href="/images/Sagebrush-m1Day"
            download={"Sagebrush-m1Day.jpg"}
            rel="noopener noreferrer"
          >
            <div className="w-full mx-auto  h-[218px] sm:h-[250px] sm:w-[456px] rounded-2xl flex flex-col items-start self-stretch justify-center gap-6 p-8 overflow-hidden  bg-[url('/images/section-six-image.jpg')] bg-cover bg-no-repeat bg-center aspect-16/9 " />
          </a>
        </div>
      </div>
    </div>
  );
};
export default SectionSix;
