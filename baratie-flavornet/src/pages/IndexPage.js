import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
 
const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className="hero-container">
        <img src="./img/header.jpg" className="hero-image" alt="" />
        <div className="inner-hero-container">
          <h1 className="hero-title">FlavorNet Foodary</h1>
          <p className="hero-content-paragraph">What would you do if you have a thousand receipes just right in your pocket?</p>
          <div className="hero-button-container">
            <button className="hero-button">Learn More</button>
            <Link to="/community"><button className="hero-button">Foodary Community</button></Link>
          </div>
        </div>
      </div>
 
      <div className="container">
        <div className="inner-container">
        <p className="element-paragraph1">Contributed by an amazing community of foodies. With hundreds of cuisines curated and tens of recipes created each day, start cooking and experience what you can do with your kitchen!</p>
          <div className="element-items">
            <img src="./img/icon1.png" className="element-image" alt="" />
            <p className="element-paragraph"> Crunchy, spice-rich, delicate, and hearty onion pakoras with tamarind chutney.</p>
          </div>
          <div className="element-items">
            <p className="element-paragraph">  French fries with shreded chicken and cheese!</p>
            <img src="./img/icon2.png" className="element-image" alt="" />
          </div>
          <div className="element-items">
            <img src="./img/icon3.png" className="element-image" alt="" />
            <p className="element-paragraph">Xiaolongbao -Chinese Soup Dumplings- Made From Gyoza Skins!</p>
          </div>
        </div>
        <Footer /> 
      </div>
    </div>
  );
}
 
export default IndexPage;