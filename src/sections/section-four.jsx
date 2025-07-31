import { useState, useEffect, useRef } from "react";
import mapImage from "../assets/map-image.png";
import locationData from "../assets/location-data";
import LocationCard from "../components/LocationCard";
const MapIcon = ({ onClick }) => {
  return (
    <button onClick={() => onClick()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.202 43.598C28.922 40.386 40 29.986 40 20C40 15.7565 38.3143 11.6869 35.3137 8.68629C32.3131 5.68571 28.2435 4 24 4C19.7565 4 15.6869 5.68571 12.6863 8.68629C9.68571 11.6869 8 15.7565 8 20C8 29.986 19.078 40.386 22.798 43.598C23.1446 43.8586 23.5664 43.9995 24 43.9995C24.4336 43.9995 24.8554 43.8586 25.202 43.598ZM24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26Z"
          fill="#EEA030"
          stroke="#11121C"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.9707 7.5C30.884 7.5 36.5 13.0633 36.5 19.9707C36.5 26.884 30.9367 32.5 24.0293 32.5C17.116 32.5 11.5 26.9367 11.5 20.0293C11.5 13.116 17.0633 7.50004 23.9707 7.5Z"
          fill="#11121C"
          stroke="#11121C"
        />
        <path
          d="M19.7839 18.2663C19.6866 18.1256 19.5196 18.0553 19.2849 18.0553C19.0501 18.0553 18.8832 18.1256 18.7858 18.2663C18.6884 18.407 18.6397 18.6382 18.6397 18.9581V24H16V16.3585H18.551V17.2915H18.5806C18.9232 16.5377 19.5631 16.1608 20.5021 16.1608C21.0499 16.1608 21.4672 16.258 21.7559 16.4506C22.0446 16.6432 22.2706 16.938 22.4376 17.3333C22.6428 16.8995 22.9245 16.5963 23.2809 16.4221C23.6374 16.2479 24.0217 16.1608 24.4321 16.1608C24.726 16.1608 24.9973 16.191 25.246 16.2529C25.4946 16.3149 25.712 16.4255 25.8981 16.5846C26.0841 16.7454 26.2302 16.9564 26.338 17.2194C26.4458 17.4824 26.4997 17.8224 26.4997 18.2362V24H23.86V18.9581C23.86 18.6382 23.8113 18.407 23.7139 18.2663C23.6166 18.1256 23.4496 18.0553 23.2149 18.0553C22.9801 18.0553 22.8132 18.1256 22.7158 18.2663C22.6184 18.407 22.5697 18.6382 22.5697 18.9581V24H19.93V18.9581C19.93 18.6382 19.8813 18.407 19.7839 18.2663ZM29.2716 17.1926H27.3066V15.5544C27.7274 15.5544 28.0891 15.5293 28.3917 15.4774C28.6943 15.4255 28.9534 15.3417 29.169 15.2228C29.3846 15.1055 29.5603 14.9447 29.6976 14.742C29.835 14.5394 29.9463 14.2931 30.035 14H32V24H29.2733V17.1926H29.2716Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

const SectionFour = () => {
  const [state, setState] = useState({
    mobileShiftMap: false,
    currentLocation: null,
    multiMapOptions: false,
    modalOpen: false,
  });
  const locationCardRef = useRef(null);

  const handleMapClick = (location) => {
    const hasMultiple = location.hasMultiple;
    console.log(hasMultiple);
    console.log(location);
    if (location.hasMultiple) {
      setState({
        ...state,
        multiMapOptions: true,
        currentLocation: location.id,
      });
    } else {
      console.log(location);

      setState({
        ...state,
        multiMapOptions: false,
        currentLocation: location.id,
        modalOpen: true,
        locationData: location,
      });
    }
  };

  const handleMultiMapClick = (loc) => {
    setState((prev) => ({
      ...prev,
      currentLocation: loc.id,
      modalOpen: true,
      locationData: loc,
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        state.modalOpen &&
        locationCardRef.current &&
        !locationCardRef.current.contains(event.target)
      ) {
        setState((prev) => ({
          ...prev,
          modalOpen: false,
          currentLocation: null,
          locationData: null,
          multiMapOptions: false,
        }));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="px-4 pb-[96px] flex flex-col justify-start items-start gap-4 max-w-[500px] w-full sm:max-w-[1280px] h-[1102]   mx-auto mt-8 sm:mt-0">
      <div className="self-stretch px-[24px] flex flex-col justify-center items-center gap-12  md:px-[64px] lg:px-[104px] max-h-[468px] h-auto mt-[96px]">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch text-center justify-start text-SB_Dark-Blue text-6xl sm:text-8xl font-bold font-[futura-pt-bold] sm:leading-[84px] leading-16">
            Imagine the Impact
          </div>
        </div>
        <div className="self-stretch text-center sm:text-left justify-start max-w-[960px] mx-auto">
          <span class="text-SB_Dark-Blue text-lg font-normal font-[futura-pt] leading-normal">
            If just 300 people gave one day's salary – for example, $200 – we
            could fully fund the construction of a church in{" "}
          </span>
          <span class="text-SB_Dark-Blue text-lg font-bold font-[futura-pt-bold] ">
            Kikanda, Congo
          </span>
          <span class="text-SB_Dark-Blue text-lg font-normal font-[futura-pt] ">
            .<br />
            And if 2,500 of us join together, we can build all 12 church
            buildings in:{" "}
          </span>
          <span class="text-SB_Dark-Blue text-lg font-bold font-[futura-pt-bold] ">
            Nepal, The Congo, Senegal, Cuba, Burkina Faso, Kenya, Zimbabwe, El
            Salvador, India
          </span>
        </div>
      </div>
      <div className="w-full overflow-x-auto overscroll-y-none overflow-y-hidden flex flex-col min-h-max">
        <div className="relative w-[1248px] h-[702px] rounded-[20px] inline-flex justify-start items-start gap-12">
          {" "}
          <LocationCard
            ref={locationCardRef}
            open={state.modalOpen}
            data={state.locationData}
            images={state?.locationData?.images}
            handleClose={() =>
              setState({
                ...state,
                modalOpen: false,
                currentLocation: null,
                locationData: null,
                multiMapOptions: false,
              })
            }
          />
          <img
            src={mapImage}
            className="w-[1248px] h-[702px]  object-cover object-center bg-[#f0f0f0]"
            alt="map"
          />
          {locationData.map((location) => {
            return (
              <div key={location.id} className={location.className}>
                <MapIcon onClick={() => handleMapClick(location)} />{" "}
                {state.multiMapOptions &&
                  location.hasMultiple &&
                  location.id === state.currentLocation && (
                    <div className="bg-SB_Dark_Blue flex flex-col justify-center items-start gap-2 text-m1 font-[futura-pt-medium] underline  text-sm p-3 rounded-lg translate-x-6 -translate-y-[125px] z-[9999]">
                      {location?.locations?.map((loc) => (
                        <button
                          key={loc.id}
                          onClick={() => handleMultiMapClick(loc)}
                        >
                          {loc.location}
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
