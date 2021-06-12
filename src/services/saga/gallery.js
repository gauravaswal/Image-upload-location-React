import { call, put, takeLatest, all } from "redux-saga/effects";
import Api from "../../lib/api";

import {
    ADD_GALLERY,
    ADD_GALLERY_SUCCESSFUL,
    ADD_GALLERY_FAILED,
    GET_GALLERY,
    GET_GALLERY_SUCCESSFUL,
    GET_GALLERY_FAILED
} from "../type";
function getGallerypApi() {
  return Api.get(
    '/gallery/get-image'
    // data.data
  );
}
function* getgallery(action) {
  try {
    const resp = yield call(getGallerypApi, action);
    yield put({ type: GET_GALLERY_SUCCESSFUL, data: resp })
  } catch (resp) {
    yield put({ type: GET_GALLERY_FAILED, error: resp })
  }
}

// Add gallery photo
function postGallerypApi(data) {
  return Api.post(
    '/gallery/add',
    data.data
  );
}
function* gallery(action) {
  try {
    const resp = yield call(postGallerypApi, action);
    yield put({ type: ADD_GALLERY_SUCCESSFUL, data: resp })
  } catch (resp) {
    yield put({ type: ADD_GALLERY_FAILED, error: resp })
  }
}

function* galleryphoto() {
  yield all([
    takeLatest(ADD_GALLERY, gallery),
    takeLatest(GET_GALLERY,getgallery)
  ])
}
export default galleryphoto;