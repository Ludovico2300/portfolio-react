import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-page">
            <h1 className="title">Welcome</h1>
            <Link to="/components" className="link">Components</Link>
            <Link to="/contacts" className="link">Contacts</Link>
            <Link to="/about" className="link">About</Link>
        </div>
    )
}

export default Home;