import React from "react";
import { motion } from "framer-motion";
function Section4() {
  return (
    <div className=" h-screen">
      <div className=" relative">
        <motion.div
          className=" absolute w-full justify-start flex"
          initial={{ x: -90, y: -250 }}
          whileInView={{ x: 0, y: -250 }}
          transition={{ duration: 1.5 }}
        >
          <svg
            width="259"
            height="597"
            viewBox="0 0 259 597"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-247.233 593.746C-276.05 598.479 -313.056 598.257 -325.56 571.867C-336.04 549.753 -321.516 524.781 -312.949 501.858C-292.356 446.758 -309.792 379.63 -354.595 341.515C-373.254 325.644 -397.078 313.098 -405.888 290.239C-419.405 255.158 -388.125 217.01 -352.802 204.137C-317.479 191.264 -278.466 194.23 -241.648 186.613C-232.127 156.794 -255.698 127.679 -275.962 103.821C-296.226 79.9627 -315.407 45.5255 -298.084 19.4575C-279.119 -9.08408 -235.666 -0.51557 -203.649 11.7119C-78.421 59.5399 45.773 114.031 153.376 193.977C200.073 228.674 245.849 272.178 257.098 329.254C290.579 499.139 -132.576 574.932 -247.231 593.753"
              fill="#F4BBA6"
            />
          </svg>

          <motion.svg
            initial={{ x: -260, y: 190 }}
            whileInView={{ x: -260, y: 190 }}
            width="119"
            height="246"
            viewBox="0 0 119 246"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-122.458 76.6071C-144.958 132.192 -119.628 202.68 -66.9769 231.385C-14.3259 260.09 58.5131 243.301 93.4391 194.549C198.627 47.7101 -54.5889 -91.0399 -122.458 76.6071Z"
              fill="#FFD95D"
            />
          </motion.svg>
        </motion.div>
      </div>
      <div className=" relative">
        <motion.div
          className=" absolute w-full justify-end flex"
          initial={{ x: 20, y: -500 }}
        >
          <svg
            width="472"
            height="1515"
            viewBox="0 0 472 1515"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.7016 909.895C260.179 518.713 613.567 208.656 1027.37 61.7562C1146.6 19.4312 1273.46 -10.0268 1399.18 4.16817C1524.89 18.3632 1649.78 81.8382 1714.23 190.702C1778.68 299.566 1767.55 455.011 1671.71 537.602C1580.14 616.502 1445.79 612.725 1325.19 604.636L1146.71 592.656C1111.3 590.279 1074.83 588.028 1041.13 599.156C968.303 623.189 928.209 703.502 919.532 779.698C910.855 855.894 925.544 932.835 923.164 1009.49C916.731 1216.46 772.979 1412.4 577.481 1480.66C162.281 1625.63 -132.148 1288.09 60.7016 909.896"
              fill="#FF9293"
            />
          </svg>
        </motion.div>
      </div>
      <div className=" relative">
        <motion.div
          className=" absolute w-full justify-end flex"
          initial={{ x: 40, y: -500 }}
        >
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
      <div className=" relative">
        <motion.div
          className=" absolute w-full justify-center flex"
          initial={{ x:-20, y: 500 }}
        >
          <motion.h1
            className=" text-9xl font-[SaolDisplay-Light] self-center"
            // whileInView={{ scale: 2, x: 1000, y: -100 }}
            initial={{scale:2}}
            transition={{ duration: 1 }}
          >
            Work
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Section4;
