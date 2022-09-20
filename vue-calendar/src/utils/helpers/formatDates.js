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

const getDateOfTheFirstMondayInMonth = (pickedDate) => {
  pickedDate.setDate(1)

  while (pickedDate.getDay() !== 1) {
    pickedDate.setDate(pickedDate.getDate() + 1)
  }

  return pickedDate.getDate()
}

const getCalendarSize = (date) => {
  const newDate = new Date(date)
  const secondOfTheMonth = 2
  const thirdOfTheMonth = 3
  const dateOfTheFirstMonday = getDateOfTheFirstMondayInMonth(newDate)
  const daysInMonth = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate()

  if (dateOfTheFirstMonday === secondOfTheMonth || (dateOfTheFirstMonday === thirdOfTheMonth && daysInMonth === 31)) {
    return 42
  }

  return 35
}

export const getActiveMonthDatesInterval = (pickedDay) => {
  const startingDate = new Date(pickedDay)
  const oneWeekInDays = 7
  const firstOfTheMonth = 1
  const calendarSize = getCalendarSize(pickedDay)

  const dateOfTheFirstMonday = getDateOfTheFirstMondayInMonth(startingDate)

  if (dateOfTheFirstMonday !== firstOfTheMonth) {
    startingDate.setDate(startingDate.getDate() - oneWeekInDays)
  }

  const lastDate = new Date(startingDate)
  lastDate.setDate(lastDate.getDate() + calendarSize)

  return [startingDate, lastDate]
}

export const isFirstDateBeforeSecondDate = (date1, date2) => {
  return new Date(date1).getTime() <= new Date(date2).getTime()
}

export const areSameMonths = (firstDate, secondDate) => {
  return new Date(firstDate).getMonth() === new Date(secondDate).getMonth()
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
  areSameMonths,
  getActiveMonthDatesInterval,
  isFirstDateBeforeSecondDate
}
