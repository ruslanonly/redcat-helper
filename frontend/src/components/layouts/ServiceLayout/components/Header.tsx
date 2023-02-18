import React from 'react'

import styles from "../ServiceLayout.module.scss"

import { HiOutlineLogout } from "react-icons/hi"

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.right}>
        <div className={styles.user}>
          <span>Незборецкий Кирилл</span>
          <img src="/Avatar.png" alt="" />
        </div>
        <HiOutlineLogout/>
      </div>
    </div>
  )
}
