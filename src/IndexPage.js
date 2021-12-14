import photo from "./images/cafe.jpg";
import "./drinksComposition/style/styles.css";
import { FaJava } from "react-icons/fa";
import { Link } from "react-router-dom";
const IndexPage = () => {
  return (
    <>
      <div className="typewriter">
        <h1>
          Welcome To... Cafe <FaJava /> Code
        
        </h1>
      </div>

      <img
        src={photo}
        alt="Cafe Code"
        style={{
          height: 370,
          width: "50%",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
      />

     <u> <h2 style={{textAlign:"center"}}>Menu</h2> </u>

      <div className="linkItems">
        <Link to="/menu/foods" style={{marginLeft:40}} >
          <button>Food Menu</button>
        </Link>
        
        <Link to="/menu/drinks" style={{ marginLeft: 270 }}>
          <button>Drink Menu</button>
        </Link>
<br /> 
      </div>
      <footer style={{marginTop:10}}>
<p style={{color:"white"}}>Thanks for Visit, Keep Smiling</p>
        </footer>
    </>
  );
};
export default IndexPage;
