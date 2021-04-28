import styled from 'styled-components/macro';
import {Link as LinkR} from 'react-router-dom';


export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2.5rem;
    height: 10vh;
    background-color: #2d3e50;
    align-items: center;
`

export const HeaderLeft = styled.div`
  
`
export const HeaderRight= styled.div`
    display: flex;
   & Div{
       margin-right: 25px;
  

       &:last-child{
        margin-right: 0;
    }
   }
`
export const Div = styled.div`

`

export const LinkTo = styled(LinkR)`
    color:darkgray;
    text-decoration: none;
     font-size: 1.4rem;
   &:hover{
       color: white;
   }
`

export const HeaderComp = styled.div`
 color:darkgray;
    text-decoration: none;
    font-size: 1.4rem;
     cursor: pointer;
   &:hover{
       color: white;
   }
`