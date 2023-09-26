import React from 'react';
import { StyledFooter, StyledFooterLeftDiv, StyledFooterLi, StyledFooterMain, StyledFooterRightDiv, StyledFooterUl, StyledIconLi, StyledIconul } from './footer.styled';
import { Container, Typography } from '../../App.Styled';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
    return (
        <div className='Footer'>
            <StyledFooterMain>
                <Container>
                    <StyledFooter>


                        <StyledFooterLeftDiv>
                            <Typography fontSize='34' fontWeight='500' >
                                About us
                            </Typography>
                            <Typography fontWeight='400' margin='20px 0'>
                                Experience the future of e-commerce design with SHOPR. Limitless design possibilities.
                            </Typography>


                            <StyledIconul>
                                <StyledIconLi>
                                <FaFacebookF />
                                </StyledIconLi>
                                <StyledIconLi><FaInstagram /></StyledIconLi>
                                <StyledIconLi><FaTwitter /></StyledIconLi>
                                <StyledIconLi><MdOutlineEmail /></StyledIconLi>

                            </StyledIconul>






                        </StyledFooterLeftDiv>

                        <StyledFooterRightDiv>


                            <StyledFooterUl>

                                <Typography fontSize='14px' fontWeight='500' color='#121212' >Information</Typography>
                                <StyledFooterLi>Shipping Policy</StyledFooterLi>
                                <StyledFooterLi>Returns & Refunds</StyledFooterLi>
                                <StyledFooterLi>Contact Us</StyledFooterLi>
                                <StyledFooterLi>Frequently asked</StyledFooterLi>
                            </StyledFooterUl>


                            <StyledFooterUl>

                                <Typography fontSize='14px' fontWeight='500' color='#121212'>Company</Typography>
                                <StyledFooterLi>About Us</StyledFooterLi>
                                <StyledFooterLi>Privacy Policy</StyledFooterLi>
                                <StyledFooterLi>Terms & Conditions</StyledFooterLi>
                                <StyledFooterLi>Cookie Policy</StyledFooterLi>
                            </StyledFooterUl>


                        </StyledFooterRightDiv>

                    </StyledFooter>
                </Container>
            </StyledFooterMain>
        </div>
    );
}

export default Footer;
