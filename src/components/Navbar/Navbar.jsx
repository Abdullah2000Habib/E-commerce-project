import React from 'react';
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Logo1 from "../../assets/images/navbar/log1.svg"
import Logo2 from "../../assets/images/navbar/log2.svg"
import { Container, StyledImage } from '../../App.Styled';
import { NavbarBg, NavbarIcon, NavbarIcons, NavbarLink, NavbarLinks, NavbarLogo,   NavbarWrapper } from './style';

const Navbar = ()=> {
    return (
        <NavbarBg>
        <Container>
        <NavbarWrapper>
                <NavbarLogo>
                <Link to={"/"}><StyledImage src={Logo1}/></Link> 
                <Link to={"/"}><StyledImage src={Logo2}/></Link> 
                </NavbarLogo>
                <NavbarLinks>
                    <NavbarLink><Link to={"/"}>Home</Link></NavbarLink>
                    <NavbarLink><Link>Product</Link></NavbarLink>
                    <NavbarLink><Link>Category</Link></NavbarLink>
                </NavbarLinks>
                <NavbarIcons>
                    <NavbarIcon><BiSearch/></NavbarIcon>
                    <NavbarIcon><RxPerson/></NavbarIcon>
                    <NavbarIcon><BiShoppingBag/></NavbarIcon>
                </NavbarIcons>
            </NavbarWrapper>
        </Container>
        </NavbarBg>
    );
}

export default Navbar;





