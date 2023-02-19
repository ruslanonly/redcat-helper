import { Flex } from '@chakra-ui/react'
import { useDragControls } from 'framer-motion'
import React, {useState} from 'react'
import { FcDocument } from "react-icons/fc"

import styles from "./FileInput.module.scss"

export default function FileInput() {
  const [files, setFiles] = useState<[]>()
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [dragged, setDragged] = useState<boolean>(false)
  return (
    <div 
    onDrop={(ev) => console.log(ev.dataTransfer.items)}
    onDropCapture={() => console.log('hello')}
    onDragOver={() => setDragged(true)} 
    onDragLeave={() => setDragged(false)} 
    className={styles.area} data-active={dragged ? true : undefined}>
      <div style={{display: dragged ? "none" : "flex"}} className={styles.centered}>
        <span>Перетащите файл в это поле или выберите на компьютере</span>
        <button>
          <Flex alignItems="center" gap=".5rem">
            <FcDocument/>
            <span style={{fontSize: ".7rem"}} color='#000'>Выбрать файл</span>
          </Flex>
        </button>
      </div>
      <input style={{display: "none"}} type="file" ref={inputRef}/>
    </div>
  )
}
