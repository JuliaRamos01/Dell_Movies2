import styled from "styled-components";

export const FooterMain = styled.div`
/* border: purple 2px solid; */
height: 15vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #000000;
`;

export const FooterButtons = styled.div`
/* border: green 2px solid; */
width: 45vw;
height: 12vh;
display: flex;
justify-content: space-evenly;
align-items: center;
button{
    color: white;
    font-size: 1rem;
    background-color: transparent;
    width: 4vw;
    height: 8vh;
    border: white 1px solid;
    border-radius: 100px;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: #000000;
    }
}
p{
    /* border: blue solid; */
    display: flex;
    align-items: end;
    height: 8vh;
    color: white;
    font-size: 2rem;
}
`;

export const Buttonsquare = styled.div`
/* border: red 1px solid; */
display: flex;
align-items: center;
justify-content: center;
font-family: 'Open Sans', sans-serif;
color: white;
font-size: 1rem;
background-color: transparent;
border: white 1px solid;
width: 7vw;
height: 8vh;
border-radius: 10px;
cursor: pointer;
&:hover{
    background-color: white;
    color: #000000;
    }
`;