import * as S from "./HeaderStyle";
import IconMovie from "../images/iconmovie.png";
import IconPlay from "../images/iconplay.png";
import IconImdb from "../images/iconimdb.png";
import IconStar from "../images/star.png";


export default function Header(){
    return(
        <S.HeaderMain>
            <S.BlurEnd>
            <S.TextHeader>
                <h1>Avatar: o Caminho da Água</h1>
                <h2>3hr 23 min | Fantasia, Família | 2023</h2>
                <S.Avaliation>
                <img className="Estrela" src={IconStar} alt="Estrela"/>
                <h2>9,9</h2>
                <h3>/10</h3>
                <img src={IconImdb} alt="IMDb"/>
                </S.Avaliation>
                <p>Após formar uma família, Jake Sully e Neytiri fazem de tudo para ficarem juntos. 
                    No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga 
                    ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.</p>
                    <S.ButtonHeader>
                        <S.ButtonPlay><img src={IconPlay} alt="Play"/>Assistir agora</S.ButtonPlay>
                        <S.ButtonTrailer><img src={IconMovie} alt="Movie"/>Trailer</S.ButtonTrailer>
                    </S.ButtonHeader>
            </S.TextHeader>
            </S.BlurEnd>
        </S.HeaderMain>
    );
}