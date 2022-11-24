import { Link, useNavigate } from "react-router-dom";

//aggiungere replica siti

function Projects() {
    const navigate = useNavigate();
    return (
        <div className="projects-page">
            <h1 className="title">Projects</h1>
            <Link to="/projects/components" className="link">Components</Link>
            <button onClick={()=> navigate(-1)} className="link">Go Back</button>
        </div>
    )
}

export default Projects;