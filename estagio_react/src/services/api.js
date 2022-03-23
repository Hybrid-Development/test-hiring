import axios from 'axios'

export default function api() {
  return axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
