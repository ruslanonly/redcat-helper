import React from 'react'

import styles from "../ServiceLayout.module.scss"
import { default as Logo } from "../../../../media/logos/logo.svg"

import { IoScan, IoDocumentTextOutline } from "react-icons/io5"
import { BsPlayFill, BsFillPersonFill } from "react-icons/bs"
import { SlMagnifier} from "react-icons/sl"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { RiCompassLine } from "react-icons/ri"
import { IconType } from 'react-icons/lib/esm/iconBase'
import Link from 'next/link'

export const NavItemLink = (props: {title: string, icon: React.ReactNode, link?: string}) => {
  return (
    <Link href={props.link || ""}>
    <div className={styles.navItem}>
      <div className={styles.logo}>
        {props.icon}
      </div>
      <span>{props.title}</span>
    </div>
    </Link>

  )
}
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <div className={styles.group}>
          <div className={styles.top}>
            <Logo/>
          </div>
          <div className={styles.center}>
            <nav className={styles.nav}>
              <NavItemLink
              link="/profile"
              icon={<BsFillPersonFill/>}
              title="Профиль"/>
              <NavItemLink
              link="/profile/order/new"
              icon={<IoDocumentTextOutline/>}
              title="Гранты"/>
              <NavItemLink
              icon={<SlMagnifier/>}
              title="База знаний"/>
              <NavItemLink
              icon={<AiOutlineCheckCircle/>}
              title="Квиз"/>
              <NavItemLink
              icon={<RiCompassLine/>}
              title="Академия росмолодежи"/>
              <NavItemLink
              icon={<BsPlayFill/>}
              title={"Видеокурс"}/>
            </nav>
          </div>
        </div>
        <NavItemLink
        icon={<IoScan/>}
        title={"Цифровой помощник"}/>
      </div>
    </div>
  )
}
