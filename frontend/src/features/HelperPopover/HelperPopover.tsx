import { Flex, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from 'src/app/redux/store'
import HelperLogo from 'src/components/UI/HelperLogo/HelperLogo'
import { FaMicrophone } from "react-icons/fa"
import styles from "./HelperPopover.module.scss"

export default function HelperPopover() {
  const disc = useDisclosure()
  const helperState = useAppSelector(state => state.helper)
  const [side, setSide] = React.useState<0 | 1>(0)

  React.useEffect(() => {
    if (helperState.text != "") {
      disc.onOpen()
      setSide(1)
    }
  }, [helperState.text])

  return (
    <Popover
    closeOnBlur={false}
    placement='top-end'
    isOpen={disc.isOpen}
    onOpen={disc.onOpen}
    onClose={disc.onClose}>
      <PopoverTrigger>
        <Flex onClick={() => setSide(0)} className={styles.trigger} flexDir="column" height="min-content" alignItems="center" gap=".5rem">
          <HelperLogo/>
          <span style={{textAlign: "center", fontSize: ".9rem"}}>Цифровой помощник</span>
        </Flex>
      </PopoverTrigger>
      <PopoverContent style={{borderColor: "var(--color-violet-main)", width: "100%", maxWidth: "400px", borderRadius: "2rem"}}>
        <PopoverCloseButton margin=".5rem .5rem 0 0"/>
        <div className={styles.body}>
          <div className={styles.left}>
            <HelperLogo/>
            {side == 0 && (
              <>
                <div className={styles.micro}>
                  <FaMicrophone/>
                </div>
              </>
            )}
          </div>
          <div className={styles.right}>
            {side == 0 && (
              <>
                <p style={{fontWeight: 500, fontSize: "1rem"}}>Привет! Я цифровой помощник Ньюбик. Помогу тебе освоиться на сайте</p>
                <VStack alignItems="start" textDecor="underline" marginTop="1rem">
                  <a href="">Подать заявку на грант</a>
                  <a href="">Навигация</a>
                  <a href="">Пояснение</a>
                </VStack>
              </>
            )}

            {side == 1 && (
              <>
                <h2 style={{fontWeight: 500, fontSize: "1.1rem"}}>Ньюбик:</h2>
                <div>
                  {helperState.text}
                </div>
              </>
            )}
           
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
