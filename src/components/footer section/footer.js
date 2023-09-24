import React from 'react';
import { StyledFooter, StyledFooterLeftDiv, StyledFooterRightDiv, StyledFooterUl } from './footer.styled';
import { Container, Typography } from '../../App.Styled';
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
    return (
        <div className='Footer'>
            <Container>
                <StyledFooter>


                    <StyledFooterLeftDiv>
                        <Typography fontSize='34' fontWeight='500' >
                            About us
                        </Typography>
                        <Typography fontWeight='400' margin='16px 0'>
                            Experience the future of e-commerce design with SHOPR. Limitless design possibilities.
                        </Typography>

                        <div >
                            <ul className='icons'>
                                <li> <FaFacebookF className='iconn' /></li>
                                <li>  <FaInstagram className='iconn' /></li>
                                <li> <FaTwitter className='iconn' /></li>
                                <li> <MdOutlineEmail className='iconn' /></li>
                            </ul>




                        </div>

                    </StyledFooterLeftDiv>

                    <StyledFooterRightDiv>


                        <StyledFooterUl>

                            <ul>
                                <Typography fontSize='14px' fontWeight='500' color='#121212' >Information</Typography>
                                <li>Shipping Policy</li>
                                <li>Returns & Refunds</li>
                                <li>Contact Us</li>
                                <li>Frequently asked</li>
                            </ul>
                        </StyledFooterUl>


                        <StyledFooterUl>

                            <ul>
                                <Typography fontSize='14px' fontWeight='500' color='#121212'>Company</Typography>
                                <li>About Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Cookie Policy </li>
                            </ul>
                        </StyledFooterUl>


                    </StyledFooterRightDiv>

                </StyledFooter>
            </Container>
        </div>
    );
}

export default Footer;
