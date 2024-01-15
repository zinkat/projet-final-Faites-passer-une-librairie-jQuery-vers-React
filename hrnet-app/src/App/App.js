import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import EmployeeList from '../pages/EmployeeList'
import Header from '../components/Header'
import Footer from '../components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EmployeeList" element={<EmployeeList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
