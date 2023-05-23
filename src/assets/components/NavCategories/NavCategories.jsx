import { useState } from "react";
import * as S from "./NavCategoriesStyle";
import Lupa from "../images/iconlupa.png";

export default function NavCategories(){

    const [inputOpen, setInputOpen] = useState(false);

    return(
        <S.NavCategories>
            <ul>
                <li>Popular</li>
                <li>Drama</li>
                <li>Ação</li>
                <li>Aventura</li>
                <li>Comédia</li>
                <li>Crime</li>
                <li>Fantasia</li>
                <li>Família</li>
                <img src={Lupa} alt="Lupa" onClick={() => { setInputOpen(!inputOpen) }}/>
                <S.Input placeholder="Pesquisar..." modo={inputOpen === false ? "none" : "initial"}/>
            </ul>
        </S.NavCategories>
    );
}
