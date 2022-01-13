import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    /*
        using theme below allows us to adjust the width of media by the value specified in App.js's theme
        in this particular case, when we are on 768px width, the items in the nav bar will be stacked vertically (column)
    */
    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
    }
`