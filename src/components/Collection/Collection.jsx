import React from 'react';
import { Container } from '../../App.Styled';
import img1 from "../../assets/images/collection/01.png";
import img2 from "../../assets/images/collection/02.png";
import CollectionCard from '../CollectionCard';
import { BgCollection, CollectionWrapper } from './style';
const Collection = () => {
    return (
        <BgCollection>
            <Container>
                <CollectionWrapper>
                    <CollectionCard img={img1} title="Splash"/>
                    <CollectionCard img={img2} title="Hair Style"/>
                </CollectionWrapper>
            </Container>
        </BgCollection>
    );
}

export default Collection;
