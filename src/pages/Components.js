import { Link } from 'react-router-dom';

function Components() {
    return (
        <div className="components-page">
            <h1 className="title">Components</h1>
            <div className="components-container">
                <Link to="/components/cards" className="link">Cards</Link>
                <Link to="/components/buttons" className="link">Buttons</Link>
            </div>
            <div className='links'>
                <Link to="/" className="link">Home</Link>
            </div>
        </div>
    );
}

export default Components;
