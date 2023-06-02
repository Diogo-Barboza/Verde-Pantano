import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './assets/pages/Inicio'
import SobreCpus from './assets/pages/SobreCpus'
import SobreNos from './assets/pages/SobreNos'
import Navbar from './assets/components/navbar'

function App() {
    return(
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/inicio" element={<Inicio/>}/>
        <Route exact path="/sobrenos" element={<SobreNos/>}/>
        <Route exact path="/sobrecpus" element={<SobreCpus/>}/>
      </Routes>
    </Router>
    )
  }

export default App
