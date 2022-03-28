import "./App.css"
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {

  const name = 'Jeremias';
  const lastaname = 'Garcia';
  return(
    <div className="App-header">
      <NavBar />
      <ItemListContainer name={name} lastname={lastaname}/>
    </div>
  );

}

export default App