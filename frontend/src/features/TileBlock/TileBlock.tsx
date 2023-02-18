import React from 'react'

import styles from "./TileBlock.module.scss"

export default function TileBlock(props: React.PropsWithChildren<{}>) {
  return (
    <div className={styles.block}>
      {props.children}
    </div>
  )
}
