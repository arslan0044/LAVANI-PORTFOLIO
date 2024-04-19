// import { BRANDSVGAnimation } from "./components/AnimatedSVG";
import { motion } from "framer-motion";
import Header from "./components/Header";
// import {BERLINSVGAnimation,TAILORMADESVGAnimation,NEWSVGTest} from "./components/AnimatedSVG"
// motion
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5.tsx";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";
import Section12 from "./components/Section12";
function App() {
  return (
    <div div className=" overflow-hidden">
      {/* <NEWSVGTest/> */}
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7/>
      <Section8/>
      <Section9/>
      <Section10/>
      <Section11/>
      <Section12/>

      {/*     
      <TAILORMADESVGAnimation/>
      <BERLINSVGAnimation/> */}
    </div>
  );
}

export default App;
