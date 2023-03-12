import React from "react"
import { Outlet } from "react-router-dom"
import styles from '../styles/mainlayout.module.css'

// components
import Header from "../components/Header"

const MainLayout = () => {
  return (
    <>
      <main className={styles.container}>
        <Header />
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout