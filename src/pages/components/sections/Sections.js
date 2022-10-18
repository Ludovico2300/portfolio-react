import { Link, useNavigate } from 'react-router-dom';

function Sections() {
    const navigate = useNavigate();
    return (
        <div className="sections-page">
            <h1 className="title">Sections</h1>
            <div className="components-container">
                <Link to="/components/sections/cards" className="link">Tab Section</Link>
            </div>
            <div className='links'>
            <button onClick={()=> navigate(-1)} className="link">Go Back</button>
            </div>
        </div>
    );
}

export default Sections;