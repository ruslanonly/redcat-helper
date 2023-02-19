import React from 'react'
import {BiScan} from "react-icons/bi"
import styles from "./HelperLogo.module.scss"

export default function HelperLogo() {
  return (
    <div className={styles.logo}>
      <BiScan/>
    </div>
  )
}
