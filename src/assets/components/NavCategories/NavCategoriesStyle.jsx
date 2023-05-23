import styled from "styled-components";

export const NavCategories = styled.div`
display: flex;
align-items: center;
justify-content: center;
/* border: red 2px solid; */
background-color: #000000;
height: 14vh;
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
    &:hover{
        color: #D53A00;
        border-bottom: #D53A00 2px solid;
    }
}
img{
    cursor: pointer;
    padding-top: 5px; /* detalhe para descer a lupa, rever depois */
}
`;

export const Input = styled.input`
    width: 20%;
    height: 5vh;
    border-radius: 20px;
    padding-left: 1rem;
    border: none;
`;