import Localbase from 'localbase'

const db = new Localbase('db')

const saveDocument = (collectionName, data) => db.collection(collectionName).add(data)

const updateDocumentById = (collectionName, documentId, data) => db.collection(collectionName).doc({ id: documentId }).update(data)

const getDocument = (collectionName, searchParam) => db.collection(collectionName).doc(searchParam).get()

const deleteDocumentById = (collectionName, documentId) => db.collection(collectionName).delete({ id: documentId })

export {
  saveDocument,
  updateDocumentById,
  getDocument,
  deleteDocumentById
}
