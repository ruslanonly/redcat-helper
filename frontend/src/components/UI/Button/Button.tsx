import React from 'react'

import styles from "./Button.module.scss"

type ButtonProps = {
  onClick?: () => void
  variant?: "outline" | "default"
  disabled?: boolean
}

export default function Button(props: React.PropsWithChildren<ButtonProps>) {
  return (
    <button disabled={props.disabled} onClick={props.onClick} className={styles.button} data-variant={props.disabled ? "disabled" : props.variant || "default"}>
      {props.children}
    </button>
  )
}
