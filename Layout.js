import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = ({ children, toggleTheme, currentTheme }) => {
  return (
    <div>
      <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      {children}
      <Footer currentTheme={currentTheme} />
    </div>
  )
}

export default Layout
