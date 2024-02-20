import React from 'react';
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            {/* Add your header component here */}
            <header>
                <h1>Your Header</h1>
                {/* Add any other header content or navigation links */}
            </header>
            <AppHeader />

            {/* Render the main content */}
            <main>{children}</main>

            <AppFooter />
        </div>
    );
};

export default Layout;
