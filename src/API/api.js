import axios from "axios";

const axiosClient = axios.create({
    baseURL:"https://65f04eecda8c6584131b65b0.mockapi.io/",
    headers: {
        "content-type": "application/json",
      },    
})

export const api = (method, endpoint, payload) => {
  return axiosClient(endpoint, { method: method, data: payload })
    .then((response) =>{
      return response.data
    })
    .catch((error) =>{
      console.error(error)
    })
}  
  