import axios from "axios"

export const getAllVideos = async() => {
    return axios.get("/api/videos")
}

export const getSingleVideo = async(id) => {
    return axios.get(`/api/video/${id}`)
}

export const signIn = async(credentials) => {
    return axios.post("/api/auth/signup", {
        email: credentials.email,
        password: credentials.password,
      });
}