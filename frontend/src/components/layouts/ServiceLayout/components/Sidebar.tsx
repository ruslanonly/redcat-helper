import React from 'react'

import styles from "../ServiceLayout.module.scss"
import { default as Logo } from "../../../../media/logos/logo.svg"

import { IoScan, IoDocumentTextOutline } from "react-icons/io5"
import { BsPlayFill, BsFillPersonFill } from "react-icons/bs"
import { SlMagnifier} from "react-icons/sl"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { RiCompassLine } from "react-icons/ri"
import { IconType } from 'react-icons/lib/esm/iconBase'

const NavItem = (props: {title: string, icon: React.ReactNode}) => {
  return (
    <div className={styles.navItem}>
      <div className={styles.logo}>
        {props.icon}
      </div>
      <span>{props.title}</span>
    </div>
  )
}
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.group}>
        <div className={styles.top}>
          <Logo/>
        </div>
        <div className={styles.center}>
          <nav className={styles.nav}>
            <NavItem
            icon={<BsFillPersonFill/>}
            title="Профиль"/>
            <NavItem
            icon={<IoDocumentTextOutline/>}
            title="Гранты"/>
            <NavItem
            icon={<SlMagnifier/>}
            title="База знаний"/>
            <NavItem
            icon={<AiOutlineCheckCircle/>}
            title="Квиз"/>
            <NavItem
            icon={<RiCompassLine/>}
            title="Академия росмолодежи"/>
            <NavItem
            icon={<BsPlayFill/>}
            title={"Видеокурс"}/>
          </nav>
        </div>
      </div>
      <NavItem
      icon={<IoScan/>}
      title={"Цифровой помощник"}/>
    </div>
  )
}
