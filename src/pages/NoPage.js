import { Link } from "react-router-dom";

function NoPage() {
    return (
        <div className="no-page">
            <h1 className="title">Ops... Something went wrong...</h1>
            <Link to="/" className="link">Go Back</Link>
        </div>
    )
}

export default NoPage;