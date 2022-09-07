import { dateLocales } from '@/utils/constants'

export const toLongMonthAndYear = (dateValue) => {
  const date = new Date(dateValue)

  return date.toLocaleDateString(dateLocales.ENGLISH, {
    month: 'long',
    year: 'numeric'
  })
}

export const toShortMonthNumericDay = (dateValue) => {
  const date = new Date(dateValue)

  return date.toLocaleString(dateLocales.ENGLISH, {
    month: 'short',
    day: 'numeric'
  })
}

export const toNumericDay = (dateValue) => {
  const date = new Date(dateValue)

  return date.toLocaleString(dateLocales.ENGLISH, {
    day: 'numeric'
  })
}

export const setCurrentTime = (dateValue) => {
  const date = new Date(dateValue)
  const currentTime = new Date()

  date.setHours(currentTime.getHours())
  date.setMinutes(currentTime.getMinutes())
  date.setSeconds(currentTime.getSeconds())

  return date
}

export const to12HoursFormat = (dateValue) => {
  const date = new Date(dateValue)

  return date.toLocaleString(dateLocales.ENGLISH, {
    hour12: true,
    hour: 'numeric'
  })
}

export const to12HoursWithMinutesFormat = (dateValue) => {
  const date = new Date(dateValue)

  return date.toLocaleString(dateLocales.ENGLISH, {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  })
}

export const fullDateToString = (dateValue) => {
  return new Date(dateValue).toISOString().slice(0, 10)
}

export const toFullDate = (dateValue) => {
  const date = new Date(dateValue)

  return date.toLocaleString(dateLocales.ENGLISH, {
    weekday: 'short',
    month: 'numeric',
    day: 'numeric',
    year: 'numeric'
  })
}

export const roundToNearest30 = (dateValue) => {
  const date = new Date(dateValue)
  const minutes = 30
  const ms = 1000 * 60 * minutes

  return new Date(Math.ceil(date.getTime() / ms) * ms)
}

export const areDatesEqual = (date1, date2) => {
  const date1String = new Date(date1).toDateString()
  const date2String = new Date(date2).toDateString()

  return date1String === date2String
}

export const addHalfHour = (dateValue) => {
  const halfHour = 30 * 60 * 1000
  const date = new Date(dateValue)
  const newDate = new Date(date.getTime() + halfHour)

  return newDate
}

export const getFirstCellInCalendar = (dateValue) => {
  let rowsQuantity = 5
  const date = new Date(dateValue)
  date.setDate(1)

  while (date.getDay() !== 1) {
    date.setDate(date.getDate() + 1)
  }
  const dateOfTheFirstMonday = date.getDate()

  if (dateOfTheFirstMonday !== 1) {
    date.setDate(date.getDate() - 7)
  }

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 2, 0).getDate()

  if (dateOfTheFirstMonday === 2 || (dateOfTheFirstMonday === 3 && daysInMonth === 31)) {
    rowsQuantity = 6
  }

  return { date, rowsQuantity }
}

export const isFirstDateBeforeSecondDate = (date1, date2) => {
  return new Date(date1).getTime() <= new Date(date2).getTime()
}

export default {
  toLongMonthAndYear,
  toShortMonthNumericDay,
  toNumericDay,
  to12HoursFormat,
  to12HoursWithMinutesFormat,
  roundToNearest30,
  toFullDate,
  fullDateToString,
  setCurrentTime,
  addHalfHour,
  areDatesEqual,
  getFirstCellInCalendar,
  isFirstDateBeforeSecondDate
}
