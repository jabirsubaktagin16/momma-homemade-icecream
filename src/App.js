import "./App.css";
import FAQ from "./Components/FAQ/FAQ";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Products />
      <FAQ />
    </div>
  );
}

export default App;
