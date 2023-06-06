import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './assets/pages/Inicio'
import SobreCpus from './assets/pages/SobreCpus'
import SobreNos from './assets/pages/SobreNos'
import Navbar from './assets/components/navbar'
import Container from './assets/components/Container';
import Start from './assets/pages/Start'
import CpuMontada from './assets/pages/CpuMontada';

function App() {
    return(
    <Router>
      <Navbar customClass="min-height"/>
        <Container customClass="min-height">
          <Routes>
              <Route exact path="/inicio" element={<Inicio/>}/>
              <Route exact path="/sobrenos" element={<SobreNos/>}/>
              <Route exact path="/sobrecpus" element={<SobreCpus/>}/>
              <Route exact path="/start" element={<Start/>}/>
              <Route exact path="/cpumontada" element={<CpuMontada/>}/>
          </Routes>
        </Container>
    </Router>
    )
  }

export default App
