import axios from 'axios'
import { GET_PRODUCT } from '../actiontype/actionType'

const pathUrl = "http://localhost:7000"


export const getProduct = () => async(dispatch) => {
    try {
        await axios.get(`${pathUrl}/api/getPoste`)
        .then((res) => {
            console.log(res,'test')
            dispatch({type:GET_PRODUCT, payload:res.data.data})
        })
    } catch (error) {
        console.log(error)
    }
}

export const addProduct = (data) => async(dispatch) => {
    try {
        await axios.post(`${pathUrl}/api/createPoste`, data)
        .then((res) => {
            dispatch(getProduct())
        })
    } catch (error) {
        
    }
} 

export const deleteProduct = (id) => async(dispatch) => {
    try {
        await axios.delete(`${pathUrl}/api/deletePoste/${id}`)
        .then((res) => {
            console.log(res)
            dispatch(getProduct())
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = (id, data) => async(dispatch) => {
    try {
        await axios.put(`${pathUrl}/api/updatePoste/${id}`, data)
        .then((res) => {
            dispatch(getProduct())
        })
    }
     catch (error) {
        console.log(error)
    }
}