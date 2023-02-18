import React, { useState } from 'react'
import { AddressSuggestions, DaDataSuggestion, DaDataAddress} from 'react-dadata'
import { InputType } from '../Input'

export type AddressValueType = DaDataSuggestion<DaDataAddress> | undefined

type AddressInputProps = {
  name: string,
  type: InputType,
  value?: string,
  disabled?: boolean,
  placeHolder?: string,
  onChange: (value: AddressValueType) => void
}

export default function AddressInput(props: AddressInputProps) {
  const [value, setValue] = useState<AddressValueType>()
  return (
    <AddressSuggestions
    value={value}
    onChange={(v) => {props.onChange(v); setValue(v)}}
    token='00967a1af3d66fe1745551804c6e0a741b0946c4'/>
  )
}
