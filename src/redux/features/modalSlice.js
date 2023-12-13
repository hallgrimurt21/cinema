import {OPEN_MODAL, CLOSE_MODAL} from "../../constants/constants"


const initialState = {
    modalVisible: false,
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
    case OPEN_MODAL:
        return {...state, modalVisible: true}
    case CLOSE_MODAL:
        return {...state, modalVisible: false}
    default:
        return state
    }
}

export default modalReducer
