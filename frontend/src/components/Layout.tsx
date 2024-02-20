import React from 'react';
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <AppHeader />

            {/* Render the main content */}
            <main>{children}</main>

            <AppFooter />
        </div>
    );
};

export default Layout;
