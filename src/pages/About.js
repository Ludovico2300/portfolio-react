import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();
    return (
        <div className="about-page">
            <h1 className="title">About</h1>
            <div className="content">This is just my personal React-Projects portfolio!</div>
            <button onClick={()=> navigate(-1)} className="link">Go Back</button>
        </div>
    )
}

export default About;