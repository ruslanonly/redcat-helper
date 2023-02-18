import React from 'react'
import TileBlock from 'src/components/TileBlock/TileBlock'

import styles from "./FormSegment.module.scss"

type FormSegmentProps = {
  title: string
}

export default function FormSegment(props: React.PropsWithChildren<FormSegmentProps>) {
  return (
    <TileBlock style={{height: "min-content"}}>
      <div className={styles.block}>
        <h1>{props.title}</h1>
        <div className={styles.inputs}>{props.children}</div>
      </div>
    </TileBlock>
  )
}
