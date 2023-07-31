import Categories from "./Components/GetCategories/Categories";
import GetProduct from "./Components/GetProduct/GetProduct";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />  {/*SEARCHBAR SAMA FOTO SEPATU */}
      <Categories />{/*KATEGORI */}
      <GetProduct />
    </>
  );
}

export default App;
