import React from 'react'
import { StyledButton, StyledForm, StyledIcon, StyledJoin, StyledJoinButton, StyledJoinInput } from './join.styled'
import { Typography } from '../../App.Styled'
import { MdOutlineEmail } from "react-icons/md";


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
                    <StyledIcon><MdOutlineEmail /></StyledIcon>
                    <StyledJoinButton>Signup</StyledJoinButton>
                </StyledForm>
            </StyledJoin>
        </div>
    )
}

export default Join