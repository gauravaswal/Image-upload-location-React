import {all} from "redux-saga/effects";
import galleryphoto from  './gallery'



export default function* rootSaga(){
yield all([
    galleryphoto()
])
}