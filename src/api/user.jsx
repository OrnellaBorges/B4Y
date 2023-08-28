import axios from 'axios'
import {config} from '../config'
const token = window.localStorage.getItem('b4y-token')

export function addOneUser(datas){
    return axios.post(`${config.api_url}/api/v1/user/save`, datas)
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        return err
    })
}

export function loginUser(datas){
    return axios.post(`${config.api_url}/api/v1/user/login`, datas)
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        return err
    })
}

export function updateProfil(datas, id){
    return axios.put(`${config.api_url}/api/v1/user/update/${id}`, datas, {headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        return err
    })
}

export function checkMyToken(){
    return axios.get(`${config.api_url}/api/v1/user/checkToken`, {headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        return err
    })
}