import { useEffect } from "react"

import styles from "./ServiceLayout.module.scss"

export default function Layout({ children } : any) {

  return (
    <>
      <div className={styles.wrapper}>
        <main>{children}</main>
      </div>
    </>
  )
}