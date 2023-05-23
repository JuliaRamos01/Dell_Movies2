import * as S from "./NavCategoriesStyle";
import Lupa from "../images/iconlupa.png";

export default function NavCategories(){
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
                <img src={Lupa} alt="Lupa"/>
            </ul>
            <SearchInput />
        </S.NavCategories>
    );
}
const SearchInput = () =>{
    return <S.Input placeholder="Pesquisar..." />
}