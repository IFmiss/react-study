import fetch from 'cross-fetch'
// 请求地址
export function fetchBingInfo (url) {
  return {
    type: 'FETCH_POSTS',
    url
  }
}

export function fetchError (error) {
  return {
    type: 'FETCH_ERROR',
    error
  }
}

export function fetchSuccess (data) {
  return {
    type: 'FETCH_SUCCESS',
    data
  }
}