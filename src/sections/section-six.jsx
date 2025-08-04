import { Share2Icon } from "lucide-react";
import sagebrushm1dayshareimage from "/images/Sagebrush-m1Day-share-image.jpg";
const SectionSix = () => {
  const handleImageFileShare = async () => {
    try {
      await navigator.share({
        title: "One Mission, One Message, One Day",
        text: "Join us!",
        url: "https://storage.googleapis.com/sbcms/images/Sagebrush-m1Day-share-image.original.jpg",
      });
    } catch (err) {
      console.error(err);
      alert("Error sharing image.");
    }
  };
  // https://storage.googleapis.com/sbcms/images/Sagebrush-m1Day-share-image.original.jpg
  return (
    <div className=" flex-col items-start  flex self-stretch  gap-2.5	   mx-auto pb-24  sm:px-40  px-6 max-w-[1280px] w-full overflow-hidden">
      <div className="text-center  pb-12  flex flex-col justify-center items-center self-stretch gap-6 lg:px-40">
        <h1 className="font-[futura-pt-bold] text-SB_Dark-Blue tracking-[-2.56px] text-[64px] leading-[64px] text-center ">
          Share the Mission.
        </h1>
        <p className=" self-stretch text-center text-SB_Dark-Blue text-lg leading-6 font-[futura-pt]">
          Help us amplify the message of "One Mission, One Message, One Day."{" "}
          Share this incredible opportunity with your friends, family, and
          social networks.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col  gap-8 bg-SB_White rounded-2xl w-full p-8 items-center justify-center mx-auto">
        <div className=" flex flex-col flex-1  items-start ">
          <div className="gap-6 flex flex-col flex-1 items-center self-stretch pb-6 ">
            <h1 className="text-center lg:text-left w-full   text-5xl  gap-4  font-[futura-pt-bold] text-SB_Dark-Blue leading-10 border-b-2 border-solid border-[#11121C] pb-4 tracking-[-1.6px] ">
              Spread the Word
            </h1>

            <p className="lg:text-left text-center text-SB_Dark-Blue text-lg font-[futura-pt] leading-6">
              Click the graphic to download and share, or click an icon below to
              directly share to your socials.
            </p>
          </div>

          <button
            style={{ fontWeight: "600" }}
            onClick={handleImageFileShare}
            className="px-8 py-6 rounded-2xl active:translate-y-1 transition-all ease-in-out duration-100  tracking-widest flex justify-center items-center bg-[#EEA030] text-white text-[20px]  font-[futura-pt-medium] gap-2.5 max-h-[61px]"
          >
            <Share2Icon className="w-6 h-6" />
            Share M1Day
          </button>
        </div>
        <div className="w-full md:w-[456px] h-auto rounded-2xl flex justify-center">
          <a
            href="/images/Sagebrush-m1Day"
            download="Sagebrush-m1Day.jpg"
            rel="noopener noreferrer"
          >
            <img
              src={sagebrushm1dayshareimage}
              alt="Sagebrush M1Day"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default SectionSix;
