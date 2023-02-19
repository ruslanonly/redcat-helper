import React from 'react'

import styles from "./HelperMessage.module.scss"
import { NavItemLink } from '../layouts/ServiceLayout/components/Sidebar'

import { IoScan } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { fadingHelper } from 'utils/animation'
import HelperLogo from '../UI/HelperLogo/HelperLogo'

type Props = {
  style?: React.CSSProperties,
}

export default function HelperMessage(props: React.PropsWithChildren<Props>) {

  const style = {
    ...props.style,
  }
  
  return (
    <motion.div  {...fadingHelper} style={style} className={styles.block}>
      <div className={styles.right}>
        <HelperLogo/>
      </div>
      <div className={styles.right}>
        {props.children}
      </div>
    </motion.div>
  )
}
