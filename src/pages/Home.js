import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-page">
            <h1 className="title">Welcome</h1>
            <Link to="/projects" className="link">Projects</Link>
            <Link to="/foundme" className="link">Found Me</Link>
            <Link to="/about" className="link">About</Link>
        </div>
    )
}

export default Home;