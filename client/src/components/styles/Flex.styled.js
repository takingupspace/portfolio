import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    /*
        any direct div or direct ul we will set the flex to 1 to create columns
        lets us align entities side by side
    */
    & > div,
    & > ul {
        flex: 1;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
        text-align: center;
    }
`