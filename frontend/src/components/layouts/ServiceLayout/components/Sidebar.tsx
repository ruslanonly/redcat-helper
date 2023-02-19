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
import HelperLogo from 'src/components/UI/HelperLogo/HelperLogo'
import { Flex, Popover, PopoverTrigger } from '@chakra-ui/react'
import HelperPopover from 'src/features/HelperPopover/HelperPopover'
import { useRouter } from 'next/router'
import { useAppDispatch } from 'src/app/redux/store'
import { setData } from 'src/app/redux/slices/helperSlice'

export const NavItemLink = (props: {title: string, icon: React.ReactNode, link?: string}) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const onClick = () => {
    if (router.pathname == "/profile/order/new" && props.link == "/profile") {
      setTimeout(() => {
        dispatch(setData({text: "Вы не закончили заполнять форму. Возможно, вам было что-то непонятно. Тут можно ознакомиться подробнее с тонкостями получения грантов. Подробнее об этом можно почитать в Базе знаний"}))
      }, 3000)
    }
  }
  return (
    <Link onClick={onClick} href={props.link || ""}>
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
              link="/profile/order"
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
        <HelperPopover/>
      </div>
    </div>
  )
}
