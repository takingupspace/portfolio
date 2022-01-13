import styled from 'styled-components';

/*
backticks are a template literal
& targets this specific export
*/

export const StyledHeader = styled.header`
    background-color: ${( {theme} ) => theme.colors.header};
    padding: 0 40 px;

    h1{
        color : #333;
    }

    &:hover{
        background-color : ${({theme}) => theme.colors.body};
    }
`