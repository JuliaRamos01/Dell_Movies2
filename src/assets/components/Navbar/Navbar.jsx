import { useState } from "react";
import * as S from "./NavbarStyle";
import Logo from "../images/icondell.png";
import Lupa from "../images/iconlupa.png";

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

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
                    <li><img src={Lupa} alt="Search" /></li>
                    <li>Filtro</li>
                    <li onClick={() => { setDropdownOpen(!dropdownOpen) }}>Login
                        <S.DropdownMenu modo={dropdownOpen === false ? "none" : "initial"}>
                            <form>
                                <h3>Login</h3>
                                <input type="email" placeholder="Digite seu email" />
                                <input type="password" placeholder="Digite sua senha" />
                                <div>
                                    <input type="checkbox" id="remember-me" />
                                    <label>Relembrar</label>
                                </div>
                                <button>Entrar</button>
                                <div>
                                    <a href="#">Esqueci minha senha</a>
                                    <a href="#">Criar conta</a>
                                </div>
                            </form>
                        </S.DropdownMenu>
                    </li>
                </ul>
            </S.NavLinks>
        </S.NavMain >
    );
}