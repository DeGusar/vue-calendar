import axios from 'axios'
const UPLOAD_IMAGES_URL = 'https://itra-istore.herokuapp.com/images/upload'

export const uploadImage = (base64EncodedImage) => {
  try {
    return axios.post(`${UPLOAD_IMAGES_URL}`, { data: base64EncodedImage })
  } catch (err) {
    console.error(err)
  }
}
