import "./App.css"
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";


const App = () => {
  const name = 'Jeremias';
  const lastaname = 'Garcia';
  
  return(
    <BrowserRouter>
      <div className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer name={name} lastname={lastaname} />} />
          <Route path="/category/:categoryName" element={<ItemListContainer name={name} lastname={lastaname} />} />
          <Route path="/products/:productName" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App