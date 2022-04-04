import axios from "axios"

export const getAllVideos = async() => {
    return axios.get("/api/videos")
}

export const getSingleVideo = async(id) => {
    return axios.get(`/api/video/${id}`)
}