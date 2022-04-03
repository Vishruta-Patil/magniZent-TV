import axios from "axios"

export const getAllVideos = async() => {
    return axios.get("/api/videos")
}