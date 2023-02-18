import React from 'react'

import styles from "./Navigation.module.scss"

type ItemProps = {
  percent: number,
  title: string,
  active?: boolean,
  onClick?: () => void
}

const Item = (props: ItemProps) => {
  return (
    <div onClick={props.onClick} className={styles.item} data-active={props.active}>
      <h3>{props.title}</h3>
      <h3>{props.percent}%</h3>
    </div>
  )
}

type NavigationProps = {
  title: string,
  active?: string,
  onClick: (s: string) => void,
  items: {
    title: string,
    percent: number,
  }[]
}

type Mock = {
  title: string,
  items: ItemProps[]
}

export const mockProfile: Mock = {
  title: "Заполненность профиля",
  items: [
    {
      title: 'Основные данные',
      percent: 30,
    },
    {
      title: 'Личные документы' ,
      percent: 0,
    },
    {
      title: 'Образование' ,
      percent: 0,
    },
    {
      title: 'Деятельность' ,
      percent: 0,
    },
    {
      title: 'Работа' ,
      percent: 0,
    },
    {
      title: 'Соцсети' ,
      percent: 0,
    }
  ]
}

export const mockNewOrder: Mock = {
  title: "Заявка на грант",
  items: [
    {
      title: "Общее",
      percent: 30,
    },
    {
      title: 'Команда' ,
      percent: 0,
    },
    {
      title: 'О проекте' ,
      percent: 0,
    },
    {
      title: 'Медиа' ,
      percent: 0,
    },
    {
      title: 'Календарный план' ,
      percent: 0,
    },
    {
      title: 'Результаты' ,
      percent: 0,
    },
    {
      title: 'Расходы' ,
      percent: 0,
    },
    {
      title: 'Софинансирование' ,
      percent: 0,
    },
    {
      title: 'Доп. файлы' ,
      percent: 0,
    },
  ]
}

export const mockNewOrderDocuments: Mock = {
  title: "Документы",
  items: [
    {
      title: "Договор о предоставлении гранта",
      percent: 30,
    },
    {
      title: 'Заявка на получение гранта' ,
      percent: 0,
    }
  ]
}

export default function Helper(props: NavigationProps) {
  return (
    <div className={styles.block}>
      <h1>{props.title}</h1>
      <div className={styles.items}>
        {props.items.map((v, index) => {
          return (
          <Item key={v.title + index} onClick={() => props.onClick(v.title)} title={v.title} percent={v.percent} active={v.title == props.active ? true : undefined}/>
        )})}
      </div>
    </div>
  )
}
