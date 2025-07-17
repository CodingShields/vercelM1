import { useState } from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import m1TrailheadArrow from "../assets/icons/m1-trailhead-arrow.svg";
const LocationCard = ({ open, handleClose, images, data }) => {
  const [imageIndex, setImageIndex] = useState(0);
  if (!open) return null;
  console.log(data);
  return (
    <div className="w-96 px-6 pt-3 pb-6 bg-m1-BG rounded-[20px] shadow-[0px_0px_30px_0px_rgba(0,0,0,0.15)] inline-flex flex-col justify-start items-start gap-3 bg-[#31302B] lg:translate-x-1/2 absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-row justify-between items-center w-full ">
        <div className="flex flex-row justify-center items-center space-x-[8px]">
          <button
            onClick={() =>
              setImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
            }
          >
            <ChevronLeft color="white" size={24} strokeWidth={2} />
          </button>
          <button
            onClick={() =>
              setImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
            }
          >
            <ChevronRight color="white" size={24} strokeWidth={2} />
          </button>
        </div>

        <button onClick={() => handleClose()}>
          <X color="white" size={24} strokeWidth={2} />
        </button>
      </div>
      <img
        src={data.images[imageIndex]}
        alt={`Image of ${data.location}`}
        className="self-stretch max-h-60 min-h-60 w-[320px]  mx-auto rounded-[20px] inline-flex justify-between items-center object-cover gap-8"
      />
      <div className="w-[288px] mx-auto">
        {!data.state ? (
          <>
            <h4
              className="leading-10 font-[futura-pt-bold] text-SB_Dark-Blue text-lg font-bold self-stretch flex-start"
              style={{
                color: "#ffffff",
                leadingTrim: "both",

                textEdge: "cap",
                fontFamily: "futura-pt-bold",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "40px",
                letterSpacing: "-1.6px",
              }}
            >
              {data.country}
            </h4>
          </>
        ) : (
          <>
            <h4
              style={{
                color: "#ffffff",
                leadingTrim: "both",

                textEdge: "cap",
                fontFamily: "futura-pt-bold",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "40px",
                letterSpacing: "-1.6px",
              }}
            >
              {data.state},
            </h4>
            <h4
              // className="whitespace-nowrap"
              style={{
                color: "#ffffff",
                leadingTrim: "both",

                textEdge: "cap",
                fontFamily: "futura-pt-bold",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "40px",
                letterSpacing: "-1.6px",
              }}
            >
              {data.country}
            </h4>
          </>
        )}
      </div>
      <div className="space-y-[24px] w-[288px] mx-auto">
        {" "}
        <div className="flex flex-row justify-start items-center">
          {" "}
          <img
            src={m1TrailheadArrow}
            alt="M1 Trailhead Arrow"
            className="w-[24px] h-[20px]"
          />
          <div className="ml-[8px]">
            <p
              style={{
                color: "#FFFF",
                leadingTrim: "both",
                textEdge: "cap",
                fontFamily: "futura-pt",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "24px" /* 100% */,
                letterSpacing: "-0.96px",
              }}
            >
              National Leadership
            </p>{" "}
            <p
              className="whitespace-nowrap"
              style={{
                color: "#FFFF",
                leadingTrim: "both",
                textEdge: "cap",
                fontFamily: "futura-pt",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px",
              }}
            >
              {data.leaders}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center">
          <img
            src={m1TrailheadArrow}
            alt="M1 Trailhead Arrow"
            className="w-[24px] h-[20px]"
          />{" "}
          <div className="ml-[8px]">
            <p
              style={{
                color: "#FFFF",
                leadingTrim: "both",
                textEdge: "cap",
                fontFamily: "futura-pt",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "-0.96px",
                alignSelf: "stretch",
              }}
            >
              Situation
            </p>{" "}
            <p
              style={{
                color: "#FFFF",
                leadingTrim: "both",
                textEdge: "cap",
                fontFamily: "futura-pt",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px" /* 100% */,
              }}
            >
              {data.situation}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center">
          {" "}
          <img
            src={m1TrailheadArrow}
            alt="M1 Trailhead Arrow"
            className="w-[24px] h-[20px]"
          />{" "}
          <div className="ml-[8px]">
            <p
              style={{
                color: "#FFFF",
                leadingTrim: "both",
                textEdge: "cap",
                fontFamily: "futura-pt",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "24px" /* 100% */,
                letterSpacing: "-0.96px",
              }}
            >
              Project Cost
            </p>
            <p
              style={{
                color: "#FFFF",
                leadingTrim: "both",
                textEdge: "cap",
                fontFamily: "futura-pt",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px" /* 100% */,
              }}
            >
              {data.cost}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
