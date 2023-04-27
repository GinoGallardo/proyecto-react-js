import Container from "./Layout/Container";
import Productos from './Paginas/Productos'
import Carrito from "./component/carrito/Carrito.jsx";

function App() {

  return (
    <div className="App">
      <Container>
        <Productos/>
      </Container>
      <Carrito/>
    </div>
  );
}

export default App;