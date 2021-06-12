import {ADD_GALLERY,ADD_GALLERY_SUCCESSFUL,ADD_GALLERY_FAILED,GET_GALLERY_FAILED,GET_GALLERY_SUCCESSFUL} from '../type';

const initialState = {
        GALLERY:[]
}
const gallery = (state=initialState, action) => {
    switch (action.type) {
        case ADD_GALLERY_SUCCESSFUL:
            return{
                ...state,
                GALLERY:action.data,
            }
            case ADD_GALLERY_FAILED:
                return{
                    ...state,
                    GALLERY:action.error
                }
                case GET_GALLERY_FAILED:
                    return{
                        ...state,
                        GALLERY:action.error
                    }
                    case GET_GALLERY_SUCCESSFUL:
                        return{
                            ...state,
                            GALLERY:action.data
                        }
        default:
            return state
    }
}
export default gallery;
