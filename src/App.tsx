import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import PaginaInicial from './pages/PaginaInicial/PaginaInicial.tsx';
import PaginaProdutos from './pages/PaginaProdutos/PaginaProdutos.tsx';
import PaginaContato from './pages/PaginaContato/PaginaContato.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PaginaInicial />} />
        <Route path='/produtos' element={<PaginaProdutos />} />
        <Route path='/contato' element={<PaginaContato />} />
      </Routes>
    </Router>
  )
}

export default App
