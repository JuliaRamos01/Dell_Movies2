import styled from "styled-components";

export const LastMoviesMain = styled.div`
/* border: rgb(0, 128, 0) 2px solid; */
height: 63vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #000000;
`;

export const Title = styled.div`
/* border: pink 2px solid; */
width: 100%;
padding-bottom: 1rem;
h1{
    color: #F6F6F6;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.7rem;
    padding-left: 2rem;
}
`;

export const BoxLastMovies = styled.div`
/* border: red 2px solid; */
img{
    width: 70%;
    /* border: pink 2px solid; */
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