import { Link, useNavigate } from 'react-router-dom';

function Components() {
    const navigate = useNavigate();
    return (
        <div className="components-page">
            <h1 className="title">Components</h1>
            <div className="components-container">
                <Link to="/components/utils" className="link">Utils</Link>
                <Link to="/components/sections" className="link">Sections</Link>
            </div>
            <div className='links'>
            <button onClick={()=> navigate(-1)} className="link">Go Back</button>
            </div>
        </div>
    );
}

export default Components;