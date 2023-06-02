import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

function Navbar(){
    return(
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to="/inicio">Inicio</Link>
            </li>
            <li className={styles.item}>
                <Link to="/sobrenos">Sobre nós</Link>
            </li>
            <li className={styles.item}>
                <Link to="sobrecpus">Sobre CPUS</Link>
            </li>
        </ul>
    )
}

export default Navbar
