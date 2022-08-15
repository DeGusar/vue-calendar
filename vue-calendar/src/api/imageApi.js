import axios from 'axios'
const UPLOAD__IMAGES__URL = 'https://itra-istore.herokuapp.com/images/upload'

export const uploadImage = (base64EncodedImage) => {
  try {
    return axios.post(`${UPLOAD__IMAGES__URL}`, { data: base64EncodedImage })
  } catch (err) {
    console.error(err)
  }
}
