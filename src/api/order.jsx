import axios from 'axios'
import {config} from '../config'
const token = window.localStorage.getItem('b4y-token')


export function saveOneOrder(datas){
    return axios.post(`${config.api_url}/api/v1/order/save`, datas, {headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        return err
    })
}

export function checkPayment(datas){
    return axios.post(`${config.api_url}/api/v1/order/payment`, datas, {headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        return err
    })
}

export function updateOrder(datas){
    return axios.put(`${config.api_url}/api/v1/order/validate`, datas, {headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        return err
    })
}

export function getAllOrders(){
    return axios.get(`${config.api_url}/api/v1/order/all`, {headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        return err
    })
}

export function getOneOrder(id){
    return axios.get(`${config.api_url}/api/v1/order/getOneOrder/${id}`, {headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        return err
    })
}