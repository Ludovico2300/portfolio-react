import { useNavigate } from "react-router-dom";

function Resume() {
    const navigate = useNavigate();
    return (
        <div className="resume-page">
            <h1 className="title">Resume</h1>
            <div className="resume-container">
                <div className="resume-pic-info">
                    <img src="" alt="user-pic" className="resume-pic" />
                    <div className="resume-info">

                    </div>
                </div>
            </div>
            <button onClick={() => navigate(-1)} className="link">Go Back</button>
        </div>
    )
}

export default Resume;