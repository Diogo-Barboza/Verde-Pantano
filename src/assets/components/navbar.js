import { Link } from 'react-router-dom'
import styles from './navbar.module.css'
import Container from './Container'
import logo from '../img/logo-site.png'

function Navbar(){
    return(
        <nav className={styles.navbar}>
          <Container>
            <Link to='/inicio'><img src={logo} alt='PcWizard' className={styles.logo}/></Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/inicio">Início</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/sobrenos">Sobre nós</Link>
                </li>
                <li className={styles.item}>
                    <Link to="sobrecpus">Sobre CPUS</Link>
                </li>
            </ul>
          </Container>
        </nav>
    )
}

export default Navbar
