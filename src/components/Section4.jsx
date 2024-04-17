import React from "react";
import { motion } from "framer-motion";
function Section4() {
  return (
    <div className="">
        <div className=" relative">


      <motion.div className=" absolute w-full justify-end flex" initial={{ x: 20 ,y:-500 }}>
        <svg
          width="287"
          height="560"
          viewBox="0 0 287 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M285.526 52.1445C286.505 46.5305 287.508 40.5275 285.208 35.3135C281.608 27.1395 271.65 24.2775 262.901 22.4755C187.233 6.89572 110.128 -0.624577 32.876 0.0405425C78.1537 58.5908 130.02 111.736 187.45 158.426C134.028 179.626 81.743 203.436 30.595 229.856C24.224 233.147 17.035 237.712 16.641 244.872C16.255 251.896 22.655 257.191 28.41 261.236L168.973 360.018C93.196 407.3 34.1116 477.107 0 559.656C83.7767 560.012 167.523 558.094 251.238 553.902C276.533 387.842 256.738 217.244 285.531 52.1445"
            fill="#D6C2E4"
          />
        </svg>
      </motion.div>
        </div>
    </div>
  );
}

export default Section4;
