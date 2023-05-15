import styled from "styled-components";
import Background from "../images/bgavatar.png";

export const HeaderMain = styled.div `
display: flex;
height: 100vh;
/* border: red 2px solid; */
align-items: end;
background-image: url(${Background});
background-size:100%;
background-repeat:no-repeat;
`;

export const TextHeader = styled.div`
/* border: green 2px solid; */
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 47vw;
height: 42vh;
h1{
    color: #F6F6F6;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 2rem;
}
h2{
    color:#F6F6F6;
    font-family: 'Open Sans', sans-serif;
    font-weight: lighter;
    font-size: 0.8rem;
    letter-spacing: 0.30px;
}
p{
    color:#F6F6F6;
    font-family: 'Open Sans', sans-serif;
    font-weight: lighter;
    font-size: 1rem;
    letter-spacing: 0.30px;
}
`;

export const Avaliation = styled.div`
display: flex;
/* border: red 1px solid; */
width: 13vw;
justify-content: space-evenly;
align-items: center;

.Estrela{
    width: 2.2vw;
}

h2{
    color:#F6F6F6;
    /* border: blue 1px solid; */
    width: 3vw;
    font-size: 2rem;
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
}

h3{
    display: flex;
    /* border: blue 1px solid; */
    height: 5vh;
    width: 2vw;
    color:#F6F6F6;
    align-items: end;
    font-size: 0.9rem;
    font-weight: 100;
    font-family: 'Open Sans', sans-serif;
}
`;

export const ButtonHeader = styled.div`
/* border: blue 2px solid; */
width: 28.5vw;
display: flex;
justify-content: space-evenly;
`;

export const ButtonPlay = styled.button`
display: flex;
align-items: center;
justify-content: center;
border: none;
width: 13vw;
height: 7vh;
border-radius: 30px;
background-color: #D53A00;
box-shadow: 0px 3px 6px #00000029;
font-family: 'Open Sans', sans-serif;
color: #F6F6F6;
font-size: 0.9rem;
img{
    width: 1.8vw;
    padding-right: 0.5rem;
}
&:hover{
    background-color: transparent;
    border:#F6F6F6 1px solid;
}
`;

export const ButtonTrailer = styled.button`
display: flex;
align-items: center;
justify-content: center;
border: none;
width: 13vw;
height: 7vh;
border-radius: 30px;
background-color: #717171;
box-shadow: 0px 3px 6px #00000029;
font-family: 'Open Sans', sans-serif;
color: #F6F6F6;
font-size: 0.9rem;
img{
    width: 2vw;
    padding-right: 0.5rem;
}
&:hover{
    background-color: transparent;
    border:#F6F6F6 1px solid;
}
`;

export const BlurEnd = styled.div`
display: flex;
align-items: end;
height: 55vh;
width: 100%;
padding-left: 8rem;
/* border: red 2px solid; */
background: transparent linear-gradient(180deg, #00000000 0%, #000000 100%) 0% 0% no-repeat padding-box;
`;