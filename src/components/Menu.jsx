import { motion, AnimatePresence } from "framer-motion";

import React, { useState } from "react";

function Menu({ isVisible }) {
  // const [Visible, setisVisible] = useState()

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className=" w-full h-screen"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 2 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              animate={{ rotate: 90, scale: 1.5, opacity: 0 }}
              transition={{ duration: 2 }}
              className=" items-center justify-center flex w-full h-full"
            >
              <motion.div
                initial={{ rotate: -90, scale: 2.3 }}
                className=" text-7xl"
              >
                PHILIPPE LAYANI
                <br /> DIGITAL DESIGN <br />
                PHILIPPE LAYANI
                <br /> DIGITAL DESIGN
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -738 }}
              animate={{ y: -738, opacity: 1 }}
              transition={{ delay: 2 }}
              className="  w-full h-[1679px] bg-[#83D398]"
            >
              <div className=" flex justify-between">
                <div>
                  <svg
                    width="190"
                    height="167"
                    viewBox="0 0 290 267"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-92.3719 -0.99437C-128 87.0066 -87.8915 198.602 -4.53553 244.047C78.822 289.491 194.138 262.912 249.432 185.729C415.963 -46.7435 15.0769 -266.41 -92.3719 -0.99437Z"
                      fill="#D6C2E4"
                    />
                  </svg>
                </div>
                <div className="mt-12">
                  <svg
                    width="80"
                    height="121"
                    viewBox="0 0 80 121"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M57.2396 119.043H28.785L20.7206 110.679V82.0056C21.5738 67.4978 34.5455 60.5002 45.981 54.3556C61.6835 45.8218 74.6549 40.3601 74.6549 25.8524C74.6549 11.5155 62.7073 0.762695 47.1757 0.762695H29.931H1.26312H1.25684L10.4735 10.3208V110.679L1.25684 120.237H1.26312H29.937H71.5765L78.745 97.0253L57.2396 119.043ZM37.447 1.95739C60.4885 2.46943 64.0729 16.6357 64.0729 26.3644C64.0729 36.0931 56.3923 47.358 44.4448 54.0144C34.0334 59.8173 24.3047 65.1084 20.7206 76.2024V10.3143L28.779 1.95739H37.447Z"
                      fill="black"
                      stroke="black"
                    />
                    <path
                      d="M57.2396 119.043H28.785L20.7206 110.679V82.0056C21.5738 67.4978 34.5455 60.5002 45.981 54.3556C61.6835 45.8218 74.6549 40.3601 74.6549 25.8524C74.6549 11.5155 62.7073 0.762695 47.1757 0.762695H29.931H1.26312H1.25684L10.4735 10.3208V110.679L1.25684 120.237H1.26312H29.937H71.5765L78.745 97.0253L57.2396 119.043ZM37.447 1.95739C60.4885 2.46943 64.0729 16.6357 64.0729 26.3644C64.0729 36.0931 56.3923 47.358 44.4448 54.0144C34.0334 59.8173 24.3047 65.1084 20.7206 76.2024V10.3143L28.779 1.95739H37.447Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.5"
                    />
                  </svg>
                </div>
                <div>
                  <div className=" flex items-center h-32 w-32 justify-center">
                    Menu
                    <div>
                      <svg
                        width="42"
                        height="46"
                        viewBox="0 0 42 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="1.35196"
                          y1="45.0346"
                          x2="38.352"
                          y2="1.0346"
                          stroke="black"
                          stroke-width="3"
                        />
                        <line
                          x1="3.63702"
                          y1="2.02164"
                          x2="40.637"
                          y2="45.0216"
                          stroke="black"
                          stroke-width="3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div initial={{ x: 1100, y: -200 }} className=" absolute">
                <svg
                  width="111"
                  height="92"
                  viewBox="0 0 111 92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.296678 -31.8646C0.569629 -35.1718 -0.0802504 -38.5006 0.722709 -41.8121C1.94882 -46.8682 5.88853 -48.607 10.6456 -46.705C23.2591 -41.6619 35.3483 -35.3711 48.2231 -30.9678C52.7665 -29.4138 56.9517 -27.1321 61.2048 -24.9615C69.9247 -20.5105 78.8613 -16.5275 88.2528 -13.7084C95.413 -11.5581 101.672 -7.68045 107.959 -3.85916C110.869 -2.09148 111.215 1.18247 108.855 3.65634C93.4287 19.8253 78.08 36.0203 61.0604 50.6412C47.8852 61.9592 33.8117 72.2865 21.7571 84.9043C19.7396 87.0171 17.4333 88.8584 14.8626 90.2867C10.7496 92.5714 7.9898 90.912 7.59121 86.2574C6.33912 71.6193 5.69067 56.945 4.8415 42.2837C4.24072 31.9016 3.89412 21.5035 3.19803 11.13C2.62613 2.63242 1.53867 -5.8319 0.997102 -14.3309C0.625949 -20.161 0.00928818 -25.9984 0.296678 -31.8646Z"
                    fill="#F4BBA6"
                  />
                </svg>
              </motion.div>
              <motion.div whileInView={{ y: -70, x:-35 }} className=" absolute">
                <svg
                  width="412"
                  height="272"
                  viewBox="0 0 612 472"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M528.9 3.55021C508.747 9.88112 491.718 23.3068 475.191 36.4613C306.387 170.809 137.582 305.157 -31.2226 439.504C-40.2386 446.679 -49.6403 460.478 -40.8505 467.927C-38.2657 470.116 -34.7543 470.815 -31.385 471.157C1.05298 474.447 30.3303 452.002 52.2805 427.894C74.2307 403.785 93.9551 375.825 123.38 361.782C157.044 345.717 199.585 349.97 228.703 326.657C251.048 308.767 260.679 277.95 284.348 261.853C313.517 242.016 357.654 248.943 381.03 222.525C396.622 204.905 398.78 176.097 419.067 164.181C442.027 150.698 475.836 166.993 495.972 149.572C512.25 135.487 510.849 105.493 530.442 96.5799C542.332 91.1709 556.115 96.6402 569.174 96.3713C589.762 95.9474 608.747 78.961 611.451 58.5466C617.297 14.3773 564.205 -7.54117 528.9 3.55021Z"
                    fill="#ADDBD0"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Menu;
