import { Link, useNavigate } from "react-router-dom";

function NoPage() {
    const navigate = useNavigate();
    return (
        <div className="no-page">
            <h1 className="title">Ops... Something went wrong...</h1>
            <Link to="/" className="link">Home</Link>
            <button onClick={()=> navigate(-1)} className="link">Go Back</button>
        </div>
    )
}

export default NoPage;