import Card01 from './components/Card01/Card01';

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Components</h1>
      <ul className="components-container">
        <li>Card01
          <div className="list-container">
            <Card01
              source="https://www.stray-cat-advice.com/wp-content/uploads/2018/05/httpspixabay.comenusersFritz_the_Cat-2.jpg"
              tag="Cards"
              date="16-10-2022"
              title="Card 01"
              content="Example Card Content" />
            <Card01
              source="https://www.stray-cat-advice.com/wp-content/uploads/2018/05/httpspixabay.comenusersFritz_the_Cat-2.jpg"
              tag="Cards"
              date="16-10-2022"
              title="Card 01"
              content="Example Card Content" />
          </div>
        </li>
        <li>Card02
          <div className="list-container">
            <Card01
              source="https://www.stray-cat-advice.com/wp-content/uploads/2018/05/httpspixabay.comenusersFritz_the_Cat-2.jpg"
              tag="Cards"
              date="16-10-2022"
              title="Card 01"
              content="Example Card Content" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
