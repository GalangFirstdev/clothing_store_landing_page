import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Product from "./Component/Products_F/Product";
import Slider from "./Component/slider/slider";
import Testimonial from "./Component/Testimonial/Testimonial";
import Virtual from "./Component/virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Product />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
