import { formatDistance, formatDistanceToNow } from "date-fns";
import { dateFormatter } from "src/components/UI/Input/utils/formatter";
import { Rules } from "./types"

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
    if (parts[0] > 31) valid = false
    if (parts[1] > 12) valid = false
    if (parts[2] > new Date().getFullYear()) valid = false
    console.log(!valid)
    if (!valid) return "Неправильная дата"
    else return true
  },
}

export default {
  password: passwordRule,
  email: emailRule,
  validateDate
}
