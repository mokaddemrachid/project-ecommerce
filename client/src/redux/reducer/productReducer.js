import { GET_PRODUCT } from "../actiontype/actionType"

const initialState={
    product:[]
}
 const getProduct = (state = initialState, {type,payload}) => {
    switch (type) {
        case GET_PRODUCT:
            return {...state,product:payload}
        default:
            return state
    }
}
export default getProduct