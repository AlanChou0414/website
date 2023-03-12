import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.title}>Web<span>site</span></h1>
        <li className={styles.navItems}>
          <ul><Link to='/'>About</Link></ul>
          <ul><Link to='/project'>Project</Link></ul>
          <ul><Link to='/contact'>Contact</Link></ul>
        </li>
      </nav>
    </header>
  )
}

export default Header