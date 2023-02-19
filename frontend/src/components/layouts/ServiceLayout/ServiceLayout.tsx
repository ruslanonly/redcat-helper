import { useGetDataQuery } from "src/app/redux/services/dataApi"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

import styles from "./ServiceLayout.module.scss"

export default function Layout({ children } : any) {
  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar/>
        <div className={styles.main}>
          <Header/>
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}