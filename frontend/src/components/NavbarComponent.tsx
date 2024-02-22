import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/css/NavbarComponent.css'; // Import the CSS file
import catLogo from '../assets/images/cat-logo.jpg'
import styled, {css} from "styled-components";
import {menuData} from "../data/MenuData";
import {Button} from "./Button";
import {FaBars} from "react-icons/fa";

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const NavLink = css`
    color: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const Logo = styled(Link)`
    ${NavLink};
    font-style: italic;
`;

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
        color: white;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink};
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

interface NavbarProps {
    toggleDropDown: () => void;
}

const NavbarComponent: React.FC<NavbarProps> = ({ toggleDropDown }) => {
    return (
        <Nav>
            <Logo to="/">FLUFFY FLUFFY</Logo>
            <MenuBars onClick={toggleDropDown}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/" primary={true}>
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
    );
};

//
// const NavbarComponent: React.FC = () => {
//   return (
//       <nav>
//         <Link to="/" className="navbar-link logo">
//           <img src={catLogo} width="80" height="80" alt="Cattery Logo" />
//             <h5 className="logo-text"> Fluffy Fluffy</h5>
//         </Link>
//         <div className="navbar-links">
//           <Link to="/" className="navbar-link">
//               Home
//           </Link>
//           <Link to="/kittens" className="navbar-link">
//             Kittens
//           </Link>
//           <Link to="/our-cats" className="navbar-link">
//             Our Cats
//           </Link>
//           <Link to="/owning" className="navbar-link">
//             Owning
//           </Link>
//             <Link to="/contact-us" className="navbar-link">
//                 Contact Us
//             </Link>
//         </div>
//       </nav>
//   );
// };

export default NavbarComponent;
