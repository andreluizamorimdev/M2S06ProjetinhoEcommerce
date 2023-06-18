import './App.css'
import Header from './components/Header/Header.tsx'
import Banner from './components/Banner/Banner.tsx'
import Footer from './components/Footer/Footer.tsx'

function App() {
  return (
    <>
      <Header />
      <Banner descricao='Especialmente feito para você' titulo='nossos produtos' />

      <Footer />
    </>
  )
}

export default App
