import styled from "styled-components";

export const PopularMoviesMain = styled.div`
/* border: green 2px solid; */
background-color: #000000;
h1{
    color: #F6F6F6;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.7rem;
    padding-left: 2rem;
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
img{
    width: 90%;
}
h2{
    color: #F6F6F6;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9rem;
}
h3{
    color: #F6F6F6;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: lighter;
}
`;