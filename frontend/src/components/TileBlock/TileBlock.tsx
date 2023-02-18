import React from 'react'

import styles from "./TileBlock.module.scss"

export default function TileBlock(props: React.PropsWithChildren<{style?: React.CSSProperties}>) {
  return (
    <div style={props.style} className={styles.block}>
      {props.children}
    </div>
  )
}
