import React, { useState } from 'react';
import {  StyledHr, StyledImgItem, StyledImgSelect, StyledOfferExpired, StyledProduct, StyledProductContent, StyledProductDetails, StyledProductDisplay, StyledProductImg, StyledProductImgShow, StyledProductPrice, StyledProductRating, StyledProductRatingIcon, StyledProductView } from './productdetails.styled';
import { StyledImage, SubContainer, Typography } from '../../App.Styled';
import { FaStar } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import select1 from '../../assets/images/productDetails/select1.svg';
import select2 from '../../assets/images/productDetails/select2.svg';
import select3 from '../../assets/images/productDetails/select3.svg';
import select4 from '../../assets/images/productDetails/select4.svg';
const Product = () => {
    const [selectedImage, setSelectedImage] = useState(select1);

    const handleImageClick = (Image) => {
        setSelectedImage(Image);
    };

    return (
        <div>
            <SubContainer>
                <StyledProductDetails>
                    <StyledProductImg>
                        <StyledProductDisplay>
                            <StyledProductImgShow>
                                <StyledImage src={selectedImage} width={100} />
                            </StyledProductImgShow>
                        </StyledProductDisplay>
                        <StyledImgSelect>
                            <StyledImgItem active={selectedImage === select1}>
                                <StyledImage
                                    src={select1}
                                    onClick={() => handleImageClick(select1)}
                                />
                            </StyledImgItem>
                            <StyledImgItem active={selectedImage === select2}>
                                <StyledImage
                                    src={select2}
                                    onClick={() => handleImageClick(select2)}
                                />
                            </StyledImgItem>
                            <StyledImgItem active={selectedImage === select3}>
                                <StyledImage
                                    src={select3}
                                    onClick={() => handleImageClick(select3)}
                                />
                            </StyledImgItem>
                            <StyledImgItem active={selectedImage === select4}>
                                <StyledImage
                                    src={select4}
                                    onClick={() => handleImageClick(select4)}
                                />
                            </StyledImgItem>
                        </StyledImgSelect>
                    </StyledProductImg>
                    <StyledProductContent>
                        <StyledProduct>
                            <Typography fontSize='34' fontWeight='500' color='#121212'>Huishō Pijama</Typography>
                            <Typography fontSize='14' fontWeight='400' margin='12px 0' color='#3E3E59'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt et dolore</Typography>
                            <StyledProductRating>
                                <StyledProductRatingIcon>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </StyledProductRatingIcon>
                                <Typography>23 Reviews</Typography>
                            </StyledProductRating>
                            <StyledProductPrice>
                                <Typography fontSize='26px' fontWeight='600'>$86.00</Typography> <Typography color='#A7A7A7' fontWeight='400'> <del>$104.00</del></Typography>
                            </StyledProductPrice>
                            <StyledProductView>
                                <FaRegEye color='#000' />
                                <Typography fontWeight='600'>32 people are looking at this product</Typography>
                            </StyledProductView>
                            <StyledHr marginTop='24'></StyledHr>
                            <StyledOfferExpired>
                                <Typography color='#DC3545' fontWeight='600'>Hurry up</Typography>
                                <Typography color='#3E3E59' fontWeight='400'>,offer expired in:</Typography>
                            </StyledOfferExpired>
                            <StyledHr marginTop='24'></StyledHr>
                        </StyledProduct>
                    </StyledProductContent>
                </StyledProductDetails>
            </SubContainer>
        </div>
    );
}

export default Product;