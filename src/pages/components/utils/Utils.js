import { Link, useNavigate } from 'react-router-dom';

function Utils() {
    const navigate = useNavigate()
    return (
        <div className="utils-page">
            <h1 className="title">Utils</h1>
            <div className="components-container">
                <Link to="/components/utils/cards" className="link">Cards</Link>
                <Link to="/components/utils/buttons" className="link">Buttons</Link>
            </div>
            <div className='links'>
            <button onClick={()=> navigate(-1)} className="link">Go Back</button>
            </div>
        </div>
    );
}

export default Utils;
