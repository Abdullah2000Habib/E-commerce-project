import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      outline: none;
      font-family: 'Space Grotesk', sans-serif;
    }
    body {
      
        box-sizing: border-box;
        font-family: 'Space Grotesk', sans-serif;
        padding: 0;
        margin: 0;
    }
   
    ul {
      list-style-type:none;
    }

    
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.myswiper {
    background-color: red;
}
    
`





export const SubContainer = styled.div`
width: 80%;
margin: auto;
`

export const theme = {
  pallete: {
    black: "#000",
    white: "#fff"

  }
}

export const FlexBox = styled.div`  
    display: flex;
`

export const FlexColum = styled(FlexBox)`  
    flex-direction: column;
`

export const Typography = styled.p`
    font-size: ${props => props.fontSize}px;
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
      margin: ${props => props.margin};
      text-align:${props => props.textalign}; 
    
  
`
export const Container = styled.p`
width: 94%;
margin:0 auto;
`
export const StyledLink = styled(Link)`
color: #121212;
font-size: 18px;
font-weight: 500;
text-decoration:underline;
text-underline-offset: 10px;
`
export const MainButton = styled('button')`
background-color: black;
color:white;
display: flex;
padding: 10px 26px;
justify-content: center;
align-items: center;
border-radius: 39px;
width: fit-content;
font-size:20px;
`





export const StyledImage = styled.img`
  max-width: 100%;
  width: ${props => props.width}%;
  height: ${props => props.height}%;
`




