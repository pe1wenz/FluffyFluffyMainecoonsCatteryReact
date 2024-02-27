import React from 'react';
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import '../assets/css/Layout.css'
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="layout-page">
            <AppHeader />

            {/* Render the main content */}
            <main>{children}</main>

            <div className="footer">
                <AppFooter />
            </div>
        </div>
    );
};

export default Layout;
