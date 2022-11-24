import { useNavigate } from "react-router-dom";

function FoundMe() {
    const navigate = useNavigate();
    return (
        <div className="foundme-page">
            <h1 className="title">Found Me</h1>
            <div className="container">
                <a href="https://www.linkedin.com/in/ludovico-colucci-266546193/" className="link">LinkedIn</a>
            <div className="content">My personal LinkedIn profile</div>
            </div>

            <div className="container">
            <a href="https://github.com/Ludovico2300" className="link">GitHub</a>
            <div className="content">My personal GitHub profile</div>
            </div>

            <button onClick={() => navigate(-1)} className="link">Go Back</button>
        </div>
    )
}

export default FoundMe;