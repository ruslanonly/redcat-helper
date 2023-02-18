import React from 'react'

import styles from "./Button.module.scss"

type ButtonProps = {
  onChange: () => void,
  variant?: "outline" | "default"
}

export default function Button(props: React.PropsWithChildren<ButtonProps>) {
  return (
    <button className={styles.button} onChange={props.onChange} data-variant={props.variant || "default"}>
      {props.children}
    </button>
  )
}
