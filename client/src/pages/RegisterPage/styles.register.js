import styled from 'styled-components/macro';

export const RegisterWrapper = styled.div`
    & form{
        display: flex;
        flex-direction: column;
        margin: 1rem;
        max-width: 40rem;
        margin: 5rem auto;

    }
    & label{
        display: block;
        margin: 1rem 0;
    }
    & input{
        padding: 5px;
        outline:none;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid darkgray;
    }
    & button{
        display: flex;
        margin: 1rem 0rem;
        justify-content: center;
        outline:none;
        padding: 5px;
        background-color:#F3B605;
        outline: none;
        text-decoration: none;
        border: 1px solid lightgray;
        cursor: pointer;
        border-radius: 5px;
        font-size: 15px;
        &:active{
            color:white;
            background-color: black;
        }
    }
`