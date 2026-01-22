import { Outlet } from 'react-router'
import Nav from '../components/organisms/Nav'
import Footer from '../components/organisms/Footer'
import Publicity from '../components/organisms/Publicity'

const App = () => {
  return (
    <>
      <Nav />
      <Publicity />
      <Outlet />
      <Publicity />
      <Footer />
    </>
  )
}

export default App
