import React from 'react'
import styled from 'styled-components/macro';


const Footer = () => {
    return (
        <FooterWrapper>
            Copyright &copy; Mern-Shop
        </FooterWrapper>
    )
}


const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    color: grey;
    margin: 2.5rem 0;
`

export default Footer