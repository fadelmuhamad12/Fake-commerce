import GetCategories from "./Components/GetCategories/GetCategories";
import GetProduct from "./Components/GetProduct/GetProduct";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />  {/*SEARCHBAR SAMA FOTO SEPATU */}
      <GetCategories /> {/*KATEGORI */}
      <GetProduct />
    </>
  );
}

export default App;
