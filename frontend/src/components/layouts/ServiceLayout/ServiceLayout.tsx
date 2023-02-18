import { useEffect } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

import styles from "./ServiceLayout.module.scss"

export default function Layout({ children } : any) {
  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar/>
        <Header/>
        <main>{children}</main>
      </div>
    </>
  )
}