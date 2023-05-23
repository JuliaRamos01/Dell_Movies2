import { useState } from "react";
import * as S from "./NavbarStyle";
import Logo from "../images/icondell.png";
import Lupa from "../images/iconlupa.png";

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [inputOpen, setInputOpen] = useState(false);

    return (
        <S.NavMain>
            <S.Image>
                <img src={Logo} alt="DellMovies" />
            </S.Image>
            <S.NavChoices>
                <ul>
                    <li>Séries</li>
                    <button>Filmes</button>
                </ul>
            </S.NavChoices>
            <S.NavLinks>
                <ul>
                    <img src={Lupa} alt="Lupa" onClick={() => { setInputOpen(!inputOpen) }}/>
                    <S.Input placeholder="Pesquisar..." modo={inputOpen === false ? "none" : "initial"}/>
                    <li>Filtro</li>
                    <li onClick={() => { setDropdownOpen(!dropdownOpen) }}>Login
                        <S.DropdownMenu modo={dropdownOpen === false ? "none" : "initial"}>
                            <S.MenuBox>
                            <form>
                                <h3>Login</h3>
                                <input type="email" placeholder="Digite seu email" />
                                <input type="password" placeholder="Digite sua senha" />
                                <S.DivLabel>
                                    <input type="checkbox" id="remember-me" />
                                    <p>Manter conectado</p>
                                </S.DivLabel>
                                <button>Entrar</button>
                                <S.Links>
                                    <a href="#">Esqueci minha senha</a>
                                    <a href="#">Criar conta</a>
                                </S.Links>
                            </form>
                            </S.MenuBox>
                        </S.DropdownMenu>
                    </li>
                </ul>
            </S.NavLinks>
        </S.NavMain >
    );
}