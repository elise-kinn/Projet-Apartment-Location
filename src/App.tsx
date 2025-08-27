import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Logement from './pages/logement'
import Footer from './components/global/footer';
import Header from "./components/global/header";

function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/logement/:id' element={<Logement />} />
    </Routes>

    <Footer />
    </>
  )
}

export default App