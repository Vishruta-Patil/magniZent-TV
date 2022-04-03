export const categoryFilterArr = (state) => {
    if (state.category === "All") {
        return state.videoList;
    }
    else if(state.category === "Astrophysics") {
        return state.videoList.filter((a) => state.category === a.category)
    }
    else if(state.category === "Astrobiology") {
        return state.videoList.filter((a) => state.category === a.category)
    }
    else if(state.category === "Cosmic Mysteries") {
        return state.videoList.filter((a) => state.category === a.category)
    }
    else if(state.category === "Universe") {
        return state.videoList.filter((a) => state.category === a.category)
    }
}