import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Logement from './pages/logement'
import Footer from './components/global/footer';
import Header from "./components/global/header";
import NotFound from './pages/notFound';

function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/logement/:id' element={<Logement />} />
      <Route path='*' element={<NotFound />} />
    </Routes>

    <Footer />
    </>
  )
}

export default App