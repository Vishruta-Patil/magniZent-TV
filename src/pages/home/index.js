import { Link } from "react-router-dom"
import "./home.css"

export const Home = () => {
    return (
        <section className="home-container">
            <div className="hero-img-container">
                <img className="hero-img" src="https://res.cloudinary.com/debanftke/image/upload/v1648840199/Screenshot_36_xjardy.png" alt=""/>
                <div className="hero-content">
                    <h1 className="main-title font-lg space-M">magni<span className="font-xl">Z</span>ent TV+ Originals</h1>
                    <p className="font-header space-M">Perfect plaform for ASTROPHILE!! <br/>  Watch unlimited Astronomy, Space and Universe related videos</p>
                    <Link to="/videolist"><button className="hero-btn">Explore Now</button></Link>
                </div>
            </div>
            </section>
    )
}