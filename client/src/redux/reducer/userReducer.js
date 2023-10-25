import { CREATE_USER, GET_USER, LOGIN, LOG_OUT } from "../actiontype/actionType";

const initialState = {
    user : {}    
}

const userReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case GET_USER : 
        return {...state,user:payload.user}
        case LOGIN :
            case CREATE_USER:
            localStorage.setItem('token',payload.token)
            return {...state, user:payload.user}
            case LOG_OUT:
                localStorage.removeItem("token")
                return {user:{}}
        default : 
        return state
    }
}
export default userReducer