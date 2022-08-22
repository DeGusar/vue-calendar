export const MY = (dateValue) => {
  const date = new Date(dateValue)

  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })
}

export default {
  MY
}
