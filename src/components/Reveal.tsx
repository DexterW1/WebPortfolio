import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useAnimationStore } from "@/store/animationeStore";

type RevealProps = {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  id: string; // Add an ID prop
};

export default function Reveal({
  children,
  width = "fit-content",
  id,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const maincontrols = useAnimation();
  const slidecontrols = useAnimation();
  const { revealedElements, markAsRevealed } = useAnimationStore();
  console.log(revealedElements);
  useEffect(() => {
    if (isInView && !revealedElements[id]) {
      maincontrols.start("visible").then(() => {
        markAsRevealed(id);
      });
      slidecontrols.start("visible");
      // markAsRevealed(id);
    }
  }, [
    isInView,
    revealedElements,
    id,
    maincontrols,
    slidecontrols,
    markAsRevealed,
  ]);

  if (revealedElements[id]) {
    return <div style={{ width }}>{children}</div>;
  }

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={maincontrols}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slidecontrols}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#9171f8",
          zIndex: 20,
        }}
      />
    </div>
  );
}
