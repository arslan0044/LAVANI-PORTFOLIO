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
              transition={{ duration: 1 }}
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
               initial={{opacity:0, y: -738}} animate={{ y: -738, opacity:1 }} transition={{delay:1.7}}
                className=" text-7xl w-full h-full bg-[#83D398]"
              >
                
              </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Menu;
