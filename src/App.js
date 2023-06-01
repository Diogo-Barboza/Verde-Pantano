import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
    return(
    <Router>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/">Sobre nós</Link>
        </li>
        <li>
          <Link to="/">Sobre CPUS</Link>
        </li>
      </ul>
    </Router>
    )

  }

export default App;
