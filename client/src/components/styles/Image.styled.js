import styled from "styled-components";

export const Image = styled.img`
    width: 15%;
    border-radius: 50%;
    /* margin-left pushes img to left relative to container*/
    margin-left: 40px;

    @media(max-width: ${({theme}) => theme.mobile}){
        margin: 40px 0 30px;
    }
`