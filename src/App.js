import "./App.css"
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {

  const name = 'Jeremias';
  const lastaname = 'Garcia';
  return(
    <div className="App-header">
      <NavBar />
      <ItemListContainer name={name} lastname={lastaname}/>
      <ItemDetailContainer />
    </div>
  );

}

export default App