import React from 'react'
import { StyledButton, StyledForm, StyledJoin, StyledJoinInput } from './join.styled'
import { Typography } from '../../App.Styled'
import { MdOutlineEmail } from "react-icons/md";
import './join.css';

function Join() {
    return (
        <div>
            <StyledJoin>
                <Typography fontSize="40" fontWeight="500" color='#121212'  >
                    Join Our Newsletter
                </Typography>
                <Typography fontSize="18" fontWeight="400" color='#121212' margin="8px 0 32px 0 ">
                    Big discounts and right to your inbox.
                </Typography>
                <StyledForm>
                    <StyledJoinInput placeholder='Email address' />
                    <MdOutlineEmail  className='icon'/>
                    <StyledButton>Signup</StyledButton>
                </StyledForm>
            </StyledJoin>
        </div>
    )
}

export default Join