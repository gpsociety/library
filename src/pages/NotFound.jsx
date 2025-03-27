import { Link } from "react-router-dom"
import "../styles/404.css"

export const NotFound = () => {
    return (
        <>
            <div className="loading__top">
                <p className="n404">404</p>
            </div>
            <div className="loading__bot">
                <p className="loading__title">Sorry, Page Not Found.</p>
                <p className="loading__subtitle">The page you requested is not available.</p>
                <Link to={"/"} className="loading__button">Go Back Home</Link>
            </div>
        </>
    )
}
