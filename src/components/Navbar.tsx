import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

// icon
import { HiMenu } from 'react-icons/hi'

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false)
  const { pathname } = useLocation()

  const handleOptions = () => (
    setDropdownMenu(!dropdownMenu)
  )

  useEffect(() => {
    setDropdownMenu(false)
  }, [pathname])

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.title}>
          <Link to='/'>
            Web<span>site</span>
          </Link>
        </h1>
        <div>
          <HiMenu className={styles.menu} size={32} color='#fff' onClick={handleOptions} />
          <li className={styles.navItems}>
            <ul><Link to='/'>About</Link></ul>
            <ul><Link to='/projects'>Projects</Link></ul>
            <ul><Link to='/contact'>Contact</Link></ul>
          </li>
        </div>
      </nav>
      {
        dropdownMenu &&
        <div className={styles.dropdownMenu}>
          <Link to='/'>About</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      }
    </header>
  )
}

export default Navbar