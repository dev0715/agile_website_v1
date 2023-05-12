import { sendPost } from '../config/api'

let createItem = ({commit, dispatch}, payload) => {
  console.log('Register');
  return new Promise((resolve, reject) => {
    // sendPost('http://localhost:8080/createItem', payload) // For Local
    sendPost('https://api.agiletestware.com/createItem', payload)
      .then((response) => {
        resolve(response)
      })
    .catch((error) => {
      reject(error)
    })
  })
}

let fileUpload = ({commit, dispatch}, payload) => {
  console.log('File Upload -- Action');
  console.log(payload);
  return new Promise((resolve, reject) => {
    sendPost('https://api.agiletestware.com/fileUpload', payload)
      .then((response) => {
        console.log('File Upload Success -- Action');
        resolve(response)
      })
    .catch((error) => {
      console.log('File Upload Error -- Action');
      reject(error)
    })
  })
}

let setResponseFlag = ({commit}, flag) => {
  console.log(flag);
  commit('SET_RESPONSE_FLAG', flag)
}

let setLoadingFlag = ({commit}, payload) => {
  commit('SET_LOADING_FLAG', payload)
}
let setLoadingText = ({commit}, payload) => {
  commit('SET_LOADING_TEXT', payload)
}

export { createItem }
export { setResponseFlag }
export { fileUpload }
export { setLoadingFlag }
export { setLoadingText }
