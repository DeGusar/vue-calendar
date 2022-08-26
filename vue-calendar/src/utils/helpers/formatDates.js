export const MMMMYYYY = (dateValue) => {
  const date = new Date(dateValue)

  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })
}

export const MMMDD = (dateValue) => {
  const date = new Date(dateValue)

  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric'
  })
}

export const DD = (dateValue) => {
  const date = new Date(dateValue)

  return date.toLocaleString('en-US', {
    day: 'numeric'
  })
}

export const hh = (dateValue) => {
  const date = new Date(dateValue)

  return date.toLocaleString('en-Us', {
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
  MMMMYYYY,
  MMMDD,
  DD,
  hh,
  areDatesEqual,
  isFirstDateBeforeSecondDate
}
