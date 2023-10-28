import axios from "axios";
import { CREATE_USER, FAIL, GET_USER, LOGIN, LOG_OUT } from "../actiontype/actionType";
import { alert_error } from "./actionError";

const pathUrl = "http://localhost:7000"

export const getUser = () => async(dispatch) => {
    const config = {
        headers: {
            token: localStorage.getItem("token"),
          },
       }
    try {
       await axios.get(`${pathUrl}/api/getCurrentUser`,config).then((res) => {
        console.log(res)
            dispatch({
                type : GET_USER,
                payload : res.data
            })
        })
    } catch (error) {
        console.log(error)
    }
}

export const addUser = (data,navigate) => async(dispatch) => {
    try {
        await axios.post(`${pathUrl}/api/createUser`, data).then((res) => {
            console.log(res)
            dispatch({
                type : CREATE_USER,
                payload : res.data
            })
            navigate("/")
            
        })
    } catch (error) {
        console.log(error)
        error.response.data.errors.forEach((el) => {
            dispatch(alert_error(el.msg));
          });
          dispatch({ type: FAIL, payload: error.response.data });
    }
}

export const loginUser = (data,navigate) => async(dispatch) => {
    try {
        await axios.post(`${pathUrl}/api/login`, data).then((res) => {
        
            dispatch({
                type:LOGIN,
                payload:res.data
            })
            navigate("/")
        })
    } catch (error) {
        console.log(error)
        error.response.data.errors.forEach((el) => {
            dispatch(alert_error(el.msg));
          });
          dispatch({ type: FAIL, payload: error.response.data });
    }
}

export const logout=(navigate)=>{
    navigate('/')
    return ({type:LOG_OUT})
    
}