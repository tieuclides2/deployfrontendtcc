import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Project from './components/pages/Project'
import NewCategory from "./components/pages/NewCategory";
import ServicePage from "./components/pages/ServicePage";
import Login from "./components/login/Login";
import Cadastro from "./components/login/Cadastro";



function App() {
  return (
    <Router>
      
      {window.location.pathname === '/login' || window.location.pathname === '/' ? '': <Navbar />}
      <Container customClass="min-height">
        <Routes>

          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newproject' element={<NewProject />} />
          <Route exact path='/newcategory' element={<NewCategory/>} />
          <Route exact path='/project/:codigo' element={<Project />} />
          <Route exact path='/servicepage' element={<ServicePage/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/cadastro' element={<Cadastro/>} />
          
          

        </Routes>
      </Container>
      <Footer/>
    </Router>
    
  )
}

export default App
