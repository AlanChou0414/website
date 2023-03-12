import { Outlet } from "react-router-dom"
import styles from '../styles/mainlayout.module.css'

// components
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <>
      <main className={styles.container}>
        <Navbar />
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout