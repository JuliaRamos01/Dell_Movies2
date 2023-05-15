import * as S from "./NavbarStyle";
import Logo from "../images/icondell.png";
import Lupa from "../images/iconlupa.png";

export default function Navbar(){
    return(
        <S.NavMain>
            <S.Image>
                <img src={Logo} alt="DellMovies"/>
            </S.Image>
            <S.NavChoices>
                <ul>
                    <li>Séries</li>
                    <button>Filmes</button>
                </ul>
            </S.NavChoices>
            <S.NavLinks>
                <ul>
                <li><img src={Lupa} alt="Search"/></li>
                <li>Filtro</li>
                <li>Login</li>
                </ul>
            </S.NavLinks>
        </S.NavMain>
    );
}