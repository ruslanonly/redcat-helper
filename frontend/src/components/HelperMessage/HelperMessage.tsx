import React from 'react'

import styles from "./HelperMessage.module.scss"
import { NavItemLink } from '../layouts/ServiceLayout/components/Sidebar'

import { IoScan } from 'react-icons/io5'

type Props = {
  style?: React.CSSProperties,
}

export default function HelperMessage(props: React.PropsWithChildren<Props>) {
  return (
    <div style={props.style} className={styles.block}>
      <div className={styles.right}>
        <NavItemLink link='' title='' icon={<IoScan/>}/>
      </div>
      <div className={styles.right}>
        {props.children}
      </div>
    </div>
  )
}
