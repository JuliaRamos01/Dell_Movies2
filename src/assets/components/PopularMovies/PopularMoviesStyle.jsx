import styled from "styled-components";

export const PopularMoviesMain = styled.div`
/* border: green 2px solid; */
background-color: #000000;
h1{
    color: #F6F6F6;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.7rem;
    padding-left: 2rem;
    @media (min-width: 350px) and (max-width: 500px){
    font-size: 1rem;
    padding-left: 1rem;
}
}
`;

export const PopularBox = styled.div`
/* border: purple 2px solid; */
display: flex;
flex-wrap:wrap;
justify-content:space-around;
`;



export const BoxPopularMovies = styled.div`
/* border: red 2px solid; */
display: flex;
flex-direction: column;
justify-content: space-around;
width: 17%;
padding: 1rem;
@media (min-width: 350px) and (max-width: 500px){
    width: 50%;
    align-items: center;
    text-align: center;
}
img{
    width: 90%;
    @media (min-width: 350px) and (max-width: 500px){
    width: 80%;
}
}
h2{
    color: #F6F6F6;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9rem;
    @media (min-width: 350px) and (max-width: 500px){
    font-size: 0.7rem;
}
}
h3{
    color: #F6F6F6;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: lighter;
    @media (min-width: 350px) and (max-width: 500px){
    font-size: 0.5rem;
}
}
`;