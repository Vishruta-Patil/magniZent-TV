import { useNavigate } from "react-router-dom"
import "./index.css"

const EmptyBox = () => {
    const navigate = useNavigate()
    return (
    <div className="empty-box-container flex-center flex-gap">
        <div className="empty-box-img-container">
            <img className="empty-box-img" src="https://res.cloudinary.com/debanftke/image/upload/v1649231103/empty-page_krsbup.svg" alt="empty-page"/>
        </div>
        <div className="empty-box-content flex-column">
            <p className="font-header">No Videos Found :(</p>
            <p className="font-md">Browse Your Favorite Videos Now!</p>
            <button className="hero-btn" onClick={() => navigate("/videolist")}>Watch Videos</button>
        </div>
    </div>
    )
}

export default EmptyBox