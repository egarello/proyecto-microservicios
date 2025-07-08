import React, { ReactNode } from 'react';
import BackButton from '../backButton/BackButton';
import Navbar from '../navbar/Navbar';
import './Layout.css';

interface LayoutProps {
    children: ReactNode;
    showBackButton?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showBackButton = true}) => {
    return (
        <div className="layout">
            <Navbar />
            <main>
                {children}
            </main>  
            <div className="backbutton">
                {showBackButton && <BackButton />} 
            </div> 
                     
        </div>
    );
}

export default Layout;
