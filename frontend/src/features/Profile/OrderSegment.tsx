import React from 'react'
import TileBlock from 'src/components/TileBlock/TileBlock'

import styles from "./OrderSegment.module.scss"

type OrderSegmentProps = {
  title: string,
  subtitle: string
}

export default function OrderSegment(props: React.PropsWithChildren<OrderSegmentProps>) {
  return (
    <TileBlock style={{height: "min-content"}}>
      <div className={styles.block}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <div className={styles.inputs}>{props.children}</div>
      </div>
    </TileBlock>
  )
}
