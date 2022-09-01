import './imagenes/logo-largo.png'
import freeCodeCampLogo from './imagenes/logo-azul.png';
import './App.css';
import ListaDeTareas from './componentes/ListadeTareas';

function App() {
  return (
    <div className="App">
      <div className='aplicacion-tareas'>
        <div className='freecodecamp-logo-contenedor'>
          <img 
            src={freeCodeCampLogo}
            classname='freecodecamp-logo'
            alt='Logo FreeCodeCamp' 
            />
        </div>

        <div className='Tareas-lista-principal'>
          <h1>Mis Tareas</h1>

          <ListaDeTareas/>

        </div>
      </div>
    </div>
  );
}

export default App;

