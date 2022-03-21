import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {

  const name = 'Jeremias';
  const lastaname = 'Garcia';
  return(
    <>
      <NavBar />
      <ItemListContainer name={name} lastname={lastaname}/>
    </>
  );

}

export default App