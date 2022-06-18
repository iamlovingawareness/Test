import Header from "./Components/Header";
import HomePageSection from "./Components/HomePageSection";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  const items = ["Pricing", "Products", "About Us", "Careers", "Contact us"];
  return (
    <>
      <Header items={items} />
      <Blog />
      <HomePageSection />
      <Footer />
    </>
  );
}

export default App;
