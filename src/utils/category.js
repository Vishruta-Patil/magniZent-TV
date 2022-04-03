export const categoryFilterArr = (state) => {
    if (state.category === "All") {
        return state.videoList;
    }
    return state.videoList.filter((video) => state.category === video.category)
}