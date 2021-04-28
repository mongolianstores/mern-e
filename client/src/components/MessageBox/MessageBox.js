import React from 'react'
import styled from 'styled-components/macro'
const MessageBox = ({error}) => {
    return (
        <MessageBoxWrapper>
            <h2>{error}!</h2>
        </MessageBoxWrapper>
    )
}

const MessageBoxWrapper = styled.div`
    display: flex;
    padding: 1rem;
    background-color: #FF2A2A;
    margin: 1rem;
    color: white;
    width:30rem;
    border-radius: 1rem;
    font-size: 0.7rem;
`

export default MessageBox
