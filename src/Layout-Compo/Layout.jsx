// Packages
import { Outlet } from 'react-router-dom'

// Components
import FooterTab from "../Footer-Compo/FooterTab"
import NavbarTab from "../Navbar-Compo/NavbarTab"

const Layout = () => {
    return (
      <>
       <NavbarTab />
       <Outlet />
       <FooterTab />
      </>
    )
}

export default Layout