import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Inicio from './pages/Inicio/Inicio.tsx';
import  Login from './pages/Login/Login.tsx';
import InicioUser from './pages/InicioUser/InicioUser.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Inicio/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/inicio" element={<InicioUser/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
