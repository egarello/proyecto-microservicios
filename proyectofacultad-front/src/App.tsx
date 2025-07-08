import './App.css'
import MateriaContainer from './components/materiasContainer/MateriaContainer'
import MateriaDetail from './pages/MateriaDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AñoContainer from './components/añosContainer/AñoContainer';
import AñoDetail from './pages/AñoDetail';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<h1>Acerca de</h1>} />
          <Route path="/services" element={<h1>Servicios</h1>} />
          <Route path="/contact" element={<h1>Contacto</h1>} />
          <Route path="/" element={<AñoContainer />} />
          <Route path='/materias' element={<MateriaContainer />} />
          <Route path="/materia/:id" element={<MateriaDetail />} />
          <Route path="/anio/:nroAnio" element={<AñoDetail />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}


export default App
