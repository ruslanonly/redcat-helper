import { motion } from 'framer-motion'
import React from 'react'
import { fading } from 'utils/animation'

import styles from "./TileBlock.module.scss"

export default function TileBlock(props: React.PropsWithChildren<{style?: React.CSSProperties}>) {
  return (
    <motion.div {...fading} style={props.style} className={styles.block}>
      {props.children}
    </motion.div>
  )
}
