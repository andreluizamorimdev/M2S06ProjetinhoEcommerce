import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import PaginaProdutos from './pages/PaginaProdutos/PaginaProdutos.tsx';
import PaginaInicial from './pages/PaginaInicial/PaginaInicial.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PaginaInicial />} />
        <Route path='/produtos' element={<PaginaProdutos />} />
      </Routes>
    </Router>
  )
}

export default App
