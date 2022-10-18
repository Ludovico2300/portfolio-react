import { useNavigate } from "react-router-dom";
import Card01 from "../../../components/Cards/Card01/Card01";

function Cards() {
const navigate=useNavigate()

    return (
        <div className="cards-page">
            <h1 className="title">Components</h1>
            <ul className="components-container">
                <li className="item">Card01
                    <Card01
                        source="https://www.stray-cat-advice.com/wp-content/uploads/2018/05/httpspixabay.comenusersFritz_the_Cat-2.jpg"
                        tag="Cards"
                        date="16-10-2022"
                        title="Card 01"
                        content="Example Card Content" />
                </li>
            </ul>
            <div className='links'>
                <button onClick={()=> navigate(-1)} className="link">Go Back</button>
            </div>
        </div>
    )
}

export default Cards;