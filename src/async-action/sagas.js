import { call, takeEvery, all, put} from 'redux-saga/effects'
import axios from 'axios'
import {fetchBingInfo} from './action'

function* requestData (actions) {
  yield put(fetchBingInfo(actions.url))
  try{
    const res = yield call((url) => new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    }), actions.url)
    yield put({type: 'FETCH_SUCCESS', data: res.data})
  } catch (e) {
    yield put({type: 'FETCH_ERROR', error: e})
  }
}

function* watchRequestData () {
  yield takeEvery('FETCH_REQUEST', requestData)
}

export default function* rootSaga () {
  yield all([
    watchRequestData()
  ])
}