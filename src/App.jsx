import SectionOne from "./sections/section-one";
import SectionTwo from "./sections/section-two";
import SectionThree from "./sections/section-three";
import SectionFour from "./sections/section-four";
import SectionFive from "./sections/section-five";
import SectionSix from "./sections/section-six";
function App() {
  return (
    <div className="   inline-flex flex-col  items-start w-full bg-[#f0f0f0]">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}

export default App;
