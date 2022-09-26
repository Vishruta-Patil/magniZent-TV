import axios from "axios"

export const getAllVideos = async() => {
    return axios.get(`${process.env.REACT_APP_API_ENDPOINT}/videos`)
}

export const getSingleVideo = async(id) => {
    return axios.get(`${process.env.REACT_APP_API_ENDPOINT}/videos/${id}`)
}

export const signIn = async(credentials) => {
    return axios.post(`${process.env.REACT_APP_API_ENDPOINT}/signin`, {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      });
}