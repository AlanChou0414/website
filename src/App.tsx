import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import MainLayout from "./layouts/MainLayout"
import About from "./pages/About"
import Project from "./pages/Project"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<About />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
