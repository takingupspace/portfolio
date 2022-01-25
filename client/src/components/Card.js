import { StyledCard } from "./styles/Card.styled"
export default function Card({item: {
    id,
    title,
    body,
    image
}}){
    return(
        /* the layout prop here allows us to set row reverse for our flex-direction in our styled
        card component for every other card the double ampersand is a short-hand ternary
        so either id is not even and we default to the value in our or within our styled card
        or the row is even and layout is equal to row-reverse
        */
        <StyledCard layout={id % 2 === 0 && 'row-reverse'} id={id === 3 && 'styledcard3' || 'false'}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <a href={ id === 3 && 'http://birdsuphotels.com' || 'false'} ><img src={`./images/${image}`} alt='' /></a>
                <ul>Programming Languages / Frameworks</ul>
            </div>
        </StyledCard>
    )
}