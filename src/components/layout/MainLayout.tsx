import NavBar from '../Shared/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'

const MainLayout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout