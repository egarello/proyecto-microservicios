import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Inicio from './pages/Inicio/Inicio.tsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Inicio/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
