import React, { useState } from 'react'
import {templateParser, parseDigit, templateFormatter, ParseFunction} from "input-format"
import ReactInput from "input-format/react"
import { useController, UseControllerProps, useForm} from 'react-hook-form'

import styles from "./Input.module.scss"
import { dateFormatter, dateParser, phoneFormatter, phoneParser, snilsFormatter, snilsParser } from './utils/formatter'
import { Rules } from './types'
import rules from 'src/react-hook-form/rules'
import AddressInput from './components/AddressInput'

export type InputType = "text" | "number" | "phone" | "date" | "address" | "snils"

type InputProps = {
  name: string,
  type: InputType,
  value?: string,
  rules?: Rules,
  disabled?: boolean,
  placeHolder?: string,
  control?: any, 
  description?: string,
  label?: string,
}

export default function Input(props: InputProps) {

  const {field, fieldState} = useController({
    name: props.name,
    control: props.control,
    rules: props.rules
  })

  const onChange: (React.ChangeEventHandler<HTMLInputElement> & ((value?: string | undefined) => void)) | undefined = (value) => {
    field.onChange(value?.toString() as string)
  }

  const hasError = !!fieldState.error

  let type = ["snils", "date"].includes(props.type) ? "text" : props.type

  let description;
  if (props.description) description = props.description
  if (hasError) description = fieldState.error?.message
  let parse, format;
  switch(props.type) {
    case "date": {
      parse = dateParser
      format = dateFormatter
      break;
    }
    case "phone": {
      parse = phoneParser
      format = phoneFormatter
      break;
    }
    case "snils": {
      parse = snilsParser
      format = snilsFormatter
      break;
    }
    default: {
      parse = phoneParser
      format = phoneFormatter
      break;
    }
  }

  const isRequired = !!props.rules?.required
  return (
    <div className={styles.wrapper} data-error={hasError}>
      {props.label && (<label><>{props.label}{isRequired && "*"}</></label>)}
      <div className={styles.inputBlock}>
        <div className={styles.icon}></div>
        {["address"].includes(props.type) && (
          <AddressInput
          onChange={(v) => field.onChange({target: {
            value: v?.unrestricted_value
          }})}
          name={props.name}
          type={props.type}
          placeHolder={props.placeHolder}
          disabled={props.disabled}/>
        )}

        {["date", "phone", "snils"].includes(props.type) && (
          <ReactInput
          name={field.name}
          placeholder={props.placeHolder}
          disabled={props.disabled}
          type={type}
          value={field.value}
          onChange={onChange}
          parse={parse}
          format={format}/>
        )}

        {["number", "text"].includes(props.type) && (
          <input 
          placeholder={props.placeHolder}
          disabled={props.disabled}
          type={type}
          value={field.value}
          onChange={(e) => field.onChange(e.currentTarget.value)}/>
        )}
      </div>
      
      {description && (<span className={styles.description}>{description}</span>)}
    </div>
  )
}
