import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Details from './pages/logement'
import Footer from './components/global/footer';
import Header from "./components/global/header";

function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details' element={<Details/>} />
    </Routes>

    <Footer />
    </>
  )
}

export default App