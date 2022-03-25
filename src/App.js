import "./App.css";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Products />
    </div>
  );
}

export default App;
