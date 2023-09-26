import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
  
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      outline: none;
      font-family: 'Space Grotesk', sans-serif;
    }
    body {
      
    }

    ul {
      list-style-type:none;
    }

    
`



export const Container = styled.div`
  width: 94%;
  margin: auto;
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

export const StyledImage = styled.img`
  max-width: 100%;
  width: ${props => props.width}%;
  height: ${props => props.height}%;
`




