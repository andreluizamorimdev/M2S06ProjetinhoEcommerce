import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BannerProvider } from './contexts/BannerContext/BannerContext.tsx';

import PaginaInicial from './pages/PaginaInicial/PaginaInicial.tsx';
import PaginaProdutos from './pages/PaginaProdutos/PaginaProdutos.tsx';
import PaginaContato from './pages/PaginaContato/PaginaContato.tsx';
import PaginaError from './pages/PaginaError/PaginaError.tsx';


function App() {
  return (
    <BannerProvider>
      <Router>
        <Routes>
          <Route path='/' element={<PaginaInicial />} />
          <Route path='/produtos' element={<PaginaProdutos />} />
          <Route path='/contato' element={<PaginaContato />} />
          <Route path='*' element={<PaginaError />} />
        </Routes>
      </Router>
    </BannerProvider>
  )
}

export default App
