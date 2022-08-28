import logo from './logo.svg';
import './App.css';
import Shopitems from './shopitems';
import Shopitems1 from './shopitems1';
function App() {
  return (
    <div className="main__container">
      <div className="main__container--innercon">
        <h2>Bestsellers</h2>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",height:"100%"}}>
            <Shopitems1 image={"./images/shoe1.svg"} productName="Nike Air Max 270" brand="Nike" price={"$195.80"}/>
            <Shopitems image={"./images/shoe2.svg"} productName="Nike Air Max 90" brand="Nike" price={"$195.80"}/>
            <Shopitems image={"./images/shoe3.svg"} productName="Nike Air Max Plus" brand="Nike" price={"$195.80"}/>
        </div>
      </div>
    </div>
  );
}

export default App;
