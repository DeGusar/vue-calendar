import statusCodes from '@/utils/constants/statusCodes'
export const responseCodeHandler = ({ status: statusCode, message, data }) => {
  if (statusCode === statusCodes.CONFLICT_CODE) {
    throw new Error(message)
  }

  if (statusCode === statusCodes.UNAUTHORIZED_CODE) {
    throw new Error(message)
  }

  if (statusCode === statusCodes.OK_CODE) {
    return data
  }

  if (statusCode === statusCodes.INTERNAL_SERVER_ERROR_CODE) {
    location.assign('/500')
  }

  if (statusCode === statusCodes.NOT_FOUND_CODE) {
    location.assign('/404')
  }
}
