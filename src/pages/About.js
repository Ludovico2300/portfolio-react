import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();
    return (
        <div className="about-page">
            <h1 className="title">About</h1>
            <div className="content">I'm just flexin' my React Skills...</div>
            <button onClick={()=> navigate(-1)} className="link">Go Back</button>
        </div>
    )
}

export default About;