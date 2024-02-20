import React from "react";
import NavbarComponent from "./NavbarComponent";
import Button from 'react-bootstrap/Button';
import '../assets/css/AppHeader.css';
import {Link} from "react-router-dom";

const cfaPageUrl = 'https://find-a-breeder.cfa.org/listing/fluffyfluffy/';

function AppHeader(){



    return (

        <header className="app-header">
            <div className="navbar-login">
                <div className="navbar"><NavbarComponent/></div>
                <div className="user-login">
                    <Button variant="outline-light" onClick={handleLoginClick}>
                        User Login
                    </Button>
                </div>
            </div>
            <div className="header-line">
                <Link to={cfaPageUrl} target="_blank" rel="noopener noreferrer" className="header-line-text-link">
                CFA Registered Maine Coon cattery in Christiansburg, Virginia, USA
                </Link>
            </div>
        </header>

    )
}

function handleLoginClick() {
    // Your logic for handling the button click goes here
    console.log("Login button clicked!");
    // You can add more functionality as needed
}

export default AppHeader;