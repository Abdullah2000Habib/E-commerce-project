/* eslint-disable no-unused-vars */
import React from 'react';
import { StyledButton, StyledHero, StyledHeroButton, StyledHeroRightDiv, StyledHeroleftDiv, StyledImg } from './hero.styled';
import { Container, StyledImage, Typography } from '../../App.Styled';
import heroimg from '../../assets/images/./HeroSection/hero.png'
const Hero = () => {
    return (
            <StyledHero>
                <StyledHeroleftDiv>
                    <Typography fontSize="54" color='#121212'>
                        Care products for every home.
                    </Typography>
                    <Typography fontSize="18" color='#121212' margin="20PX 0 20PX 0">
                        Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.
                    </Typography>
                    <StyledHeroButton>
                        See Collection
                    </StyledHeroButton>
                </StyledHeroleftDiv>
                <StyledHeroRightDiv>
                    <StyledImage src={heroimg} width='100%' height='100%' alt='' />
                </StyledHeroRightDiv>
            </StyledHero>

    );
}

export default Hero;
