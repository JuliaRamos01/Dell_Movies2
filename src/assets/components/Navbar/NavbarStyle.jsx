import styled from "styled-components";

export const NavMain = styled.div`
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
@media (min-width: 350px) and (max-width: 500px){
    height: 9vh;
}
`;

export const Image = styled.div`
/* border: black 2px solid; */
width: 10vw;
height: 7vh;
img{
    width: 8vw;
    @media (min-width: 350px) and (max-width: 500px){
    width: 20vw;
}
}
`;

export const NavChoices = styled.div`
/* border: green 2px solid; */
width: 40vw;
display: flex;
justify-content: flex-end;
@media (min-width: 350px) and (max-width: 500px){
    width: 45vw;
}

ul{
    width: 17vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (min-width: 350px) and (max-width: 500px){
    width: 30vw;
}
}

li{
    list-style: none;
    color: white;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 200;
    cursor: pointer;@media (min-width: 350px) and (max-width: 500px){
        font-size: 0.8rem;
    }
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
    @media (min-width: 350px) and (max-width: 500px){
    width: 15vw;
    height: 6vh;
    font-size: 0.8rem;
}
}
`;

export const NavLinks = styled.div`
/* border: blue 2px solid; */
width: 30vw;
height: 5vh;
display: flex;
align-items: center;
justify-content: space-evenly;
@media (min-width: 350px) and (max-width: 500px){
        width: 17vw;
    }
img{
    padding-top: 10px; /* detalhe para descer a lupa, rever depois */
    width: 3vw;
    @media (min-width: 350px) and (max-width: 500px){
        display: none;
    }
}
ul{
    width: 30vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
li{
    padding-left: 2rem;
    list-style: none;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 200;
    cursor: pointer;
    @media (min-width: 350px) and (max-width: 500px){
        font-size: 0.8rem;
    }
}
`;

export const DropdownMenu = styled.div`
    display: ${(props) => props.modo};
    position: absolute;
    top: 100%;
    right: 1px;
    width: 20%;
    height: 30vh;
    background-color: #000000;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    z-index: 1;
    @media (min-width: 350px) and (max-width: 500px){
    width: 40vw;
}

    h3{
        padding-left: 0.6rem;
        cursor: auto;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    input{
        width: 15vw;
        height: 5vh;
        border-radius: 30px;
        padding-left: 1rem;
        @media (min-width: 350px) and (max-width: 500px){
        width: 35vw;
}
    }
    button{
        width: 7vw;
        height: 4vh;
        background-color: #747474;
        border-radius: 30px;
        border: none;
        color: white;
        cursor: pointer;
        @media (min-width: 350px) and (max-width: 500px){
        width: 15vw;
        }
    }
`;

export const MenuBox = styled.div`
/* border: purple solid; */
height: 28vh;
display: flex;
justify-content: space-between;
`;

export const DivLabel = styled.div`
/* border: green solid; */
display: flex; 
align-items: center;
input{
    width: 3vw;
    height: 2vh;
}
p{
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8rem;
}
`;

export const Links = styled.div`
/* border: green solid; */
display: flex; 
align-items: center;
justify-content: space-between;
a{
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8rem;
    color: white;
    @media (min-width: 350px) and (max-width: 500px){
    font-size: 0.6rem;
}
}
`;

export const Input = styled.input`
    display: ${(props) => props.modo};
    width: 50%;
    height: 5vh;
    border-radius: 20px;
    padding-left: 1rem;
    border: none;
    @media (min-width: 350px) and (max-width: 500px){
        display: none;
    }
`;


