import React from "react";
import NavBar from "../NavBar/NavBar";
import './Layout.css'
import Footer from "../Footer/Footer";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <div className="layout-container">
            <header>
                <NavBar/>
            </header>
            <main className="main-content">
                {children}  {/* Aquí se inyectará el contenido (como Login) */}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
        
    );
}
export default Layout;