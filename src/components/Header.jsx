import React, { useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import RedoAnimText from "./RedoAnimText";
import {
  BERLINSVGAnimation,
  VIENNASVGAnimation,
  BRANDSVGAnimation,
  GreeenTop,
  YellowCiricle,
} from "./AnimatedSVG";

function Header() {
  const t = [
    "Philippe Layani is a Berlin- and Vienna-based digital UX designer who   blends creativity, technology, and strategy to develop exceptional,  tailor-made interactive experiences that connect brands with theiraudiences.",
  ];
  // const controls = useAnimation();
  const textArray = Array.isArray(t) ? t : [t];
  const ref = useRef(null);
  // const isInView = useInView(ref, { amount: 0.5, once });
  // const text = t.split(" ");

  return (
    <div className=" overflow-hidden max-w-screen-xl mx-auto">
      <nav className=" flex items-top justify-between px-3">
        <motion.div
          initial={{ y: -100, rotate: 0 }}
          animate={{ y: -10, rotate: 5, scale: 1.07, x: 5 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <GreeenTop />
        </motion.div>

        {/* logo */}
        <div className=" items-center justify-center flex mt-[88px]">
          <svg
            width="80"
            height="121"
            viewBox="0 0 80 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.2389 119.043H28.7839L20.7199 110.68V82.0095C21.5729 67.5015 34.5449 60.5045 45.9799 54.3595C61.6799 45.8255 74.6539 40.3595 74.6539 25.8595C74.6539 11.5225 62.7059 0.769531 47.1749 0.769531H1.25586L10.4679 10.3205V110.68L1.25586 120.238H71.5759L78.7439 97.0255L57.2389 119.043ZM37.4459 1.95753C60.4879 2.46953 64.0679 16.6355 64.0679 26.3645C64.0679 36.0935 56.3919 47.3575 44.4439 54.0095C34.0329 59.8095 24.3039 65.1035 20.7199 76.1975V10.3095L28.7779 1.95753H37.4459Z"
              fill="black"
            />
            <path
              d="M71.9441 120.737H0.078125L9.96712 110.477V10.5223L0.078125 0.262303H47.1781C54.4887 0.134537 61.5843 2.73743 67.0781 7.5623C69.6385 9.86901 71.6819 12.6912 73.0743 15.8436C74.4666 18.9959 75.1765 22.4072 75.1571 25.8533C75.1571 39.3303 64.2571 45.1533 50.4641 52.5173C49.0861 53.2533 47.6641 54.0173 46.2221 54.7963C34.9001 60.8803 22.0701 67.7753 21.2221 82.0213V110.478L28.9991 118.543H57.0271L78.3851 96.6753L79.2201 97.1753L71.9441 120.737ZM2.43213 119.737H71.2061L77.6551 98.8553L57.4481 119.542H28.5671L20.2151 110.88V81.9803C20.6041 75.3673 23.4911 69.7073 29.0401 64.6803C30.8478 63.0666 32.7724 61.589 34.7981 60.2593C33.1902 61.3056 31.6418 62.4407 30.1601 63.6593C28.1492 65.2954 26.3509 67.1766 24.8071 69.2593C23.227 71.4157 22.0056 73.8133 21.1901 76.3593L20.2141 76.2053V10.1093L28.5671 1.4573H37.4591C47.8151 1.6873 55.3301 4.6953 59.7951 10.3963C62.9671 14.4443 64.5671 19.8173 64.5671 26.3643C64.5391 28.9791 64.0601 31.5694 63.1511 34.0213C62.1601 36.7243 60.8122 39.2826 59.1431 41.6283C55.3442 46.9313 50.4025 51.3131 44.6831 54.4503L44.2451 54.6943L42.6051 55.6093C43.6661 55.0283 44.7151 54.4643 45.7391 53.9093C47.1791 53.1263 48.6061 52.3643 49.9851 51.6283C56.9161 47.9283 62.9021 44.7283 67.2471 40.7803C69.3404 38.951 71.0609 36.7348 72.3141 34.2533C73.568 31.631 74.1965 28.7536 74.1501 25.8473C74.1685 22.5415 73.4877 19.2692 72.1522 16.2451C70.8167 13.221 68.8568 10.5135 66.4011 8.3003C61.091 3.64379 54.2356 1.13436 47.1741 1.2623H2.43213L10.9671 10.1183V110.88L2.43213 119.737ZM21.2191 10.5153V73.4873C25.3891 64.0593 34.3351 59.0743 43.7621 53.8213L44.2001 53.5773C49.7878 50.5136 54.616 46.234 58.3281 41.0543C59.9461 38.7818 61.253 36.3032 62.2141 33.6843C63.0841 31.3405 63.5432 28.8642 63.5711 26.3643C63.5711 20.0463 62.0351 14.8813 59.0051 11.0133C54.7341 5.5593 47.4791 2.6813 37.4401 2.4573H28.9901L21.2191 10.5153Z"
              fill="black"
            />
            <path
              d="M57.2389 119.043H28.7839L20.7199 110.68V82.0095C21.5729 67.5015 34.5449 60.5045 45.9799 54.3595C61.6799 45.8255 74.6539 40.3595 74.6539 25.8595C74.6539 11.5225 62.7059 0.769531 47.1749 0.769531H1.25586L10.4679 10.3205V110.68L1.25586 120.238H71.5759L78.7439 97.0255L57.2389 119.043ZM37.4459 1.95753C60.4879 2.46953 64.0679 16.6355 64.0679 26.3645C64.0679 36.0935 56.3919 47.3575 44.4439 54.0095C34.0329 59.8095 24.3039 65.1035 20.7199 76.1975V10.3095L28.7779 1.95753H37.4459Z"
              fill="black"
            />
            <path
              d="M71.76 120.487H0.667969L10.223 110.578V10.4214L0.667969 0.509368H47.175C54.4237 0.382209 61.4594 2.96264 66.907 7.74637C69.4419 10.0295 71.4652 12.823 72.8439 15.9435C74.2227 19.064 74.9258 22.4409 74.907 25.8524C74.907 39.1794 64.068 44.9674 50.346 52.2954C48.968 53.0314 47.546 53.7954 46.102 54.5754C34.719 60.6904 21.821 67.6214 20.968 82.0094V110.574L28.889 118.788H57.133L79.288 96.1094L71.76 120.487ZM1.84397 119.987H71.391L78.2 97.9404L57.344 119.292H28.678L20.468 110.78V81.9904C20.853 75.4454 23.713 69.8414 29.212 64.8584C34.032 60.4904 40.312 57.1134 45.86 54.1344C47.3 53.3514 48.727 52.5904 50.106 51.8534C57.052 48.1444 63.05 44.9404 67.418 40.9694C72.183 36.6374 74.402 31.8334 74.402 25.8514C74.4207 22.5098 73.7325 19.202 72.3823 16.1453C71.0321 13.0886 69.0507 10.352 66.568 8.11537C61.2129 3.41636 54.2983 0.882697 47.175 1.00937H1.84397L10.723 10.2194V110.779L1.84397 119.987ZM20.468 77.7894V10.2094L28.668 1.70937H37.448C47.725 1.93737 55.176 4.90937 59.593 10.5524C62.729 14.5524 64.319 19.8764 64.319 26.3664C64.2914 28.9524 63.8178 31.5144 62.919 33.9394C61.9352 36.6214 60.5974 39.1599 58.941 41.4874C55.1647 46.7583 50.2528 51.1138 44.568 54.2324L44.13 54.4764C38.967 57.3534 34.09 60.0704 30.008 63.4614C27.9793 65.1109 26.1652 67.008 24.608 69.1084C23.0121 71.2861 21.7786 73.7072 20.955 76.2784L20.468 77.7894ZM20.968 10.4154V74.7434C21.7789 72.6319 22.8671 70.6378 24.204 68.8134C25.784 66.6795 27.625 64.7518 29.684 63.0754C33.801 59.6554 38.698 56.9274 43.884 54.0384L44.322 53.7944C49.9428 50.7117 54.7994 46.4057 58.533 41.1944C60.1635 38.9036 61.4805 36.4051 62.449 33.7654C63.3283 31.3959 63.7924 28.8926 63.821 26.3654C63.821 19.9904 62.267 14.7734 59.202 10.8594C54.882 5.34437 47.562 2.43337 37.442 2.20837H28.884L20.968 10.4154Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="relative flex">
          <YellowCiricle className=" absolute mt-[-20px]" />
          <div className=" absolute mt-36 mx-24 text-3xl flex items-center justify-center gap-6">
            <div>Menu</div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="w-16 h-1 bg-black"></div>
              <div className="w-16 h-1 bg-black"></div>
            </div>
          </div>
        </div>
      </nav>
      {/* logo */}
      <RedoAnimText text="Philippe Layani is a Berlin- and Vienna-based digital UX designer who   blends creativity, technology, and strategy to develop exceptional,  tailor-made interactive experiences that connect brands with theiraudiences."
       />
      {/* <motion.div
        className=" px-9 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 5, duration: 0 }}
      >
       <RedoAnimText
          text={`Philippe Layani is a ${(<BERLINSVGAnimation />)} - and  ${(
            <VIENNASVGAnimation />
          )} -based digital UX designer who blends creativity`}
        /> 
      </motion.div>
      <motion.div
        className=" px-9 flex items-center text-4xl"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1, y: -96 }}
        transition={{ delay: 5, duration: 0 }}
      >
        Philippe Layani is a 
        <span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 5,
            }}
          >
            <BERLINSVGAnimation />
          </motion.span>
          <motion.span
            initial={{ opacity:0 }}
            animate={{ rotate:90 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1,
            }}
          >
            Berlin
          </motion.span>
        </span>
        - and <VIENNASVGAnimation />
        -based digital UX designer who blends creativity
      </motion.div>
      <BRANDSVGAnimation/> */}
    </div>
  );
}

export default Header;
