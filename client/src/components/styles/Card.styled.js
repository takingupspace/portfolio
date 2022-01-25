import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;
    /* 
        flex-direction prop layout is not working
    */
    flex-direction: ${({layout}) => layout || 'row'}
    

    img {
        width: 80%;
    }

    & > div {
        flex: 1;
    }

    /* another use of our theme to set the placement of our entities when the view-port is 768 or lower */
    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
    }

    div {
    ul{
        display: flex;
        align-items: top;
        font-size: 30px;
        padding-bottom: 90%
    }
    }
`