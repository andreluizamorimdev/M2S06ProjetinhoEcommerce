import './App.css'
import Header from './components/Header/Header.tsx'
import Banner from './components/Banner/Banner.tsx'
import Footer from './components/Footer/Footer.tsx'
import ListaProdutos from './components/ListaProdutos/ListaProdutos.tsx'

function App() {
  return (
    <>
      <Header />
      <Banner descricao='Especialmente feito para você' titulo='nossos produtos' />
      <ListaProdutos />
      <Footer />
    </>
  )
}

export default App
