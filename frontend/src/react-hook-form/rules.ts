import { compareAsc, formatDistance, formatDistanceToNow, isValid } from "date-fns";
import { dateFormatter } from "src/components/UI/Input/utils/formatter";
import { Rules } from "./types"

import { AddressSuggestions, DaDataSuggestion, DaDataAddress} from 'react-dadata'
import { AddressValueType } from "src/components/UI/Input/components/AddressInput";

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const required: Rules =  {
  required: {value: true, message: "Поле должно быть заполнено"},
}

const passwordRule: Rules =  {
  minLength: {value: 6, message: "min length is 6"},
}

const emailRule: Rules = {
  pattern: {value: emailRegex, message: "it is not email"}
}

const validateDate: Rules = {
  validate: (value, formState) => {
    let valid = true
    const parts = dateFormatter(value).text.split(".").map((v) => parseInt(v))
    const curDate = new Date(parts[2], parts[1], parts[0])
    if (parts[0] > 31) valid = false
    if (parts[1] > 12) valid = false
    if (parts[2] > new Date().getFullYear()) valid = false
    let compared = compareAsc(new Date(parts[2], parts[1], parts[0]), new Date())
    if (compared >= 0) valid = false
    if (!valid) return "Неправильная дата"
    else return true
  },
}

const validateAddress: Rules = {
  validate: (value: AddressValueType, formState) => {
    console.log('hello', value?.unrestricted_value)    
    const valid = true
    if (!valid) return "Неправильная дата"
    else return true
  },
}

export default {
  required,
  password: passwordRule,
  email: emailRule,
  validateDate,
  validateAddress
}
