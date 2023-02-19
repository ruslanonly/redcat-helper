import {MotionProps} from "framer-motion"

export const fading: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: .2, ease: 'easeIn' },
}

export const fadingHelper: MotionProps = {
  initial: { opacity: 0, transform: "scale(0.1)" },
  animate: { opacity: 1, transform: "scale(1)" },
  exit: { opacity: 0, transform: "scale(0.1)" },
  transition: { duration: .7, ease: 'easeInOut', delay: .1, bounce: 100},
}