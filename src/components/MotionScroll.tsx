import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MotionScroll = ({ children, className, duration, variant }: any) => {
  const boxVariant = variant || {
    visible: { y: 1, opacity: 1, scale: 1, transition: { duration: duration || 1.8 } },
    hidden: { opacity: 0, scale: 1, y: -200 },
  };
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionScroll;
