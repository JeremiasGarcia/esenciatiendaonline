import "./App.css"
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";
import CustomProvider from "./context/CartContext";


const App = () => {
  const name = 'Jeremias';
  const lastaname = 'Garcia';
  
  return(
    <BrowserRouter>
      <CustomProvider>
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
        </CustomProvider>
    </BrowserRouter>
  );

}

export default App