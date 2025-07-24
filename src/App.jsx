import SectionOne from "./sections/section-one";
import SectionTwo from "./sections/section-two";
import SectionThree from "./sections/section-three";
import SectionFour from "./sections/section";
import SectionFive from "./sections/section-five";
import SectionSix from "./sections/section-six";
function App() {
  return (
    <div className="w-full  overflow-y-scroll scroll-smooth flex flex-col items-start justify-start bg-[#f0f0f0]">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      {/* <SectionFive /> */}
      {/* <SectionSix /> */}
    </div>
  );
}

export default App;
