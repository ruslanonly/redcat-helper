import { templateParser, templateFormatter, parseDigit } from "input-format"
const PHONE_TEMPLATE = "+x (xxx) xxx xx xx"
const DATE_TEMPLATE = "xx.xx.xxxx"
const SNILS_TEMPLATE = "xxx-xxx-xxx xx"

export const phoneParser = templateParser(PHONE_TEMPLATE, parseDigit)
export const phoneFormatter = templateFormatter(PHONE_TEMPLATE)

export const snilsParser = templateParser(SNILS_TEMPLATE, parseDigit)
export const snilsFormatter = templateFormatter(SNILS_TEMPLATE)

export const dateParser = templateParser(DATE_TEMPLATE, parseDigit)
export const dateFormatter = templateFormatter(DATE_TEMPLATE)