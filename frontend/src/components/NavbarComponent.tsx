import React , {useState, useEffect}from 'react';
import { Link , useLocation} from 'react-router-dom';
// import '../assets/css/NavbarComponent.css'; // Import the CSS file
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
    transition: 0.3s;
    
    & span {
        position: relative;
    }

    & span:hover::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        border-bottom: 1px solid #ffffff;
    }
    
    &:hover{
        transform: translateY(-2px);
    }
`;

const Logo = styled(Link)`
    ${NavLink};
    font-style: italic;
    &:hover{
        border-bottom: 0;
        transform: translateY(-2px);
    }
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

const NavMenuLinks = styled(Link)<{ isCurrent: boolean }>`
    ${NavLink};
    ${props => props.isCurrent && props.to !== '/' ? `
        & span::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 2px;
            border-bottom: 1px solid #ffffff;
        }
    ` : ''}

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
    const [navbar, setNavbar] = useState(false);
    const location = useLocation()

    const changeBackGround = () =>{
        if(window.scrollY >= 60){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    };

    useEffect(() =>{
        const watchScroll = () =>{
            window.addEventListener('scroll', changeBackGround)
        };

        watchScroll();

        return () =>{
            window.removeEventListener('scroll', changeBackGround)
        };
    }, []);

    let style = {
        backgroundColor: navbar || location.pathname !== "/" ? '#CD853F' : 'transparent',
        transition: '0.4s'
    }

    return (
        <Nav style={style}>
            <Logo to="/home">FLUFFY FLUFFY</Logo>
            <MenuBars onClick={toggleDropDown}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link}
                                  key={index}
                                  isCurrent={location.pathname.startsWith(item.link)}
                    >
                        <span>{item.title}</span>
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/about-us" primary={true}>
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
    );
};

export default NavbarComponent;
