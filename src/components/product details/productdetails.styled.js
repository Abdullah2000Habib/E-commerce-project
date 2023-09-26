import styled from "styled-components";


export const StyledProductDetails = styled.div`

display: flex;
justify-content:space-between;
`

export const StyledProductImg = styled.div`
width: 35%;

`

export const StyledProductDisplay = styled.div`
overflow: auto;
`

export const StyledProductImgShow = styled.div`
  display: flex;
`


export const StyledImgSelect = styled.div`
display: flex;
gap:19px;

`

export const StyledImgItem = styled.div`
  margin-top: 20px;

img {
  border: 2px solid transparent;
  cursor: pointer;

  ${props => props.active && `
    border-color: black;
  `}
}
`


export const StyledProductContent = styled.div`
width:60%;
`










export const StyledProduct = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
width:60%;
`
export const StyledProductRating = styled.ul`
display: flex;
gap:8px;
color:  #605F5F;

font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;

`
export const StyledProductRatingIcon = styled.li`
display: flex;
gap:5px;
color: Orange;
`

export const StyledProductPrice = styled.div`
display: flex;
gap:12px;
margin: 16px 0;

`

export const StyledProductView = styled.div`
display: flex;
gap: 8px;
`


export const StyledOfferExpired = styled.div`
display:flex;
margin-top:24px;

`



export const StyledHr = styled.hr`
border :1px solid #EAEAEA ;
margin-top: ${props => props.marginTop}px;

`

export const StyledProductColor = styled.div`
padding-top: 24px;
`
export const StyledColor = styled.div`
display: flex;
gap:10px;
`

export const StyledColorInput = styled.input`
 padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
`
export const StyledColorLabel = styled.label`
    border-radius: 4px;
    cursor: pointer;
    content: '';
    width: 40px;
    height: 40px;
    display: inline-block;

`













