import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.leaseasy.ru/v1/',
  })