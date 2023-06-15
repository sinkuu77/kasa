import Header from "./Header"
import Footer from "./Footer"
import { Route, Routes } from 'react-router-dom'
import "../styles/base.scss"
import Home from "../pages/Home"
import Apropos from "../pages/Apropos"
import Error from "../pages/Error"

function App() {
  return (
  <div>
  <Header />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/accueil' element={<Home />}/>
    <Route path='/apropos' element={<Apropos />}/>
    <Route path='*' element={<Error />}/>
  </Routes>
  <Footer />
  </div>
  )
}

export default App;
