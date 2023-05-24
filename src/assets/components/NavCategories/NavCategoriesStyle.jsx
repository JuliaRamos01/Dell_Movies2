import styled from "styled-components";

export const NavCategories = styled.div`
display: flex;
align-items: center;
justify-content: center;
/* border: red 2px solid; */
background-color: #000000;
height: 14vh;
@media (min-width: 350px) and (max-width: 500px){
    height: 10vh;
}
ul{
    /* border: blue 1px solid; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90vw;
}
li{
    color: #F6F6F6;
    width: 5vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 0.9rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 200;
    cursor: pointer;
    @media (min-width: 350px) and (max-width: 500px){
    font-size: 0.5rem;
}
    &:hover{
        color: #D53A00;
        border-bottom: #D53A00 2px solid;
    }
}
img{
    cursor: pointer;
    padding-top: 5px; /* detalhe para descer a lupa, rever depois */
    @media (min-width: 350px) and (max-width: 500px){
    width: 1.5rem;
}
}
`;

export const Input = styled.input`
    display: ${(props) => props.modo};
    width: 20%;
    height: 5vh;
    border-radius: 20px;
    padding-left: 1rem;
    border: none;
    @media (min-width: 350px) and (max-width: 500px){
    height: 3vh;
}
`;