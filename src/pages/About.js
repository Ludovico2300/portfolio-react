import { Link } from "react-router-dom";

function About() {
    return (
        <div className="about-page">
            <h1 className="title">About</h1>
            <div className="content">I'm just flexin' my React Skills...</div>
            <Link to="/" className="link">Home</Link>
        </div>
    )
}

export default About;