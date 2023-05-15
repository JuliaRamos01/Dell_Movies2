import styled from "styled-components";

export const NavMain =  styled.div`
background-color: rgba(0,0,0,1/1) ;
backdrop-filter: blur(15px);
/* border: red 2px solid; */
display: flex;
align-items: center;
position: fixed;
justify-content: space-between;
height: 12vh;
width: 100%;
padding-left: 1.5rem;
padding-right: 1.5rem;
z-index: 1;
`;

export const Image = styled.div`
/* border: black 2px solid; */
width: 10vw;
height: 7vh;
img{
    width: 8vw;
}
`;

export const NavChoices =  styled.div`
/* border: green 2px solid; */
width: 25vw;
display: flex;
justify-content: center;

ul{
    width: 17vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

li{
    list-style: none;
    color: white;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 200;
    cursor: pointer;
}

button{
    width: 10vw;
    height: 7vh;
    border: none;
    border-radius: 30px;
    color: white;
    background-color: #747474;
    box-shadow: 0px 3px 6px #0000005C;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 200;
    cursor: pointer;
}
`;

export const NavLinks =  styled.div`
/* border: blue 2px solid; */
width: 15vw;
height: 5vh;
display: flex;
align-items: center;
img{
    padding-top: 10px; /* detalhe para descer a lupa, rever depois */
    width: 3vw;
}
ul{
    width: 15vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
li{
    list-style: none;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 200;
    cursor: pointer;
    &:hover{ 
        color: #D53A00;
    }
}
`;
