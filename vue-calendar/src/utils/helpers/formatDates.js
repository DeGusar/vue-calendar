import dateLocales from '@/utils/constants/dateLocales'

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

export const to12HoursFormat = (dateValue) => {
  const date = new Date(dateValue)

  return date.toLocaleString(dateLocales.ENGLISH, {
    hour12: true,
    hour: 'numeric'
  })
}

export const areDatesEqual = (date1, date2) => {
  const date1String = new Date(date1).toDateString()
  const date2String = new Date(date2).toDateString()

  return date1String === date2String
}

export const isFirstDateBeforeSecondDate = (date1, date2) => {
  return new Date(date1).getTime() < new Date(date2).getTime()
}

export default {
  toLongMonthAndYear,
  toShortMonthNumericDay,
  toNumericDay,
  to12HoursFormat,
  areDatesEqual,
  isFirstDateBeforeSecondDate
}
