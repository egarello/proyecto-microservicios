import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Inicio from './pages/Inicio/Inicio.tsx';
import  Login from './pages/Login/Login.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Inicio/>}/>
        <Route path ="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
