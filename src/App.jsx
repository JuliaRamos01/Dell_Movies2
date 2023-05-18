import * as S from "./assets/components/GlobalStyle";
import Navbar from "./assets/components/Navbar/Navbar";
import Header from "./assets/components/Header/Header";
import NavCategories from "./assets/components/NavCategories/NavCategories";
import LastMovies from "./assets/components/LastMovies/LastMovies";
import PopularMovies from "./assets/components/PopularMovies/PopularMovies";
import Footer from "./assets/components/Footer/Footer";


export default function App() {
  return (
    <>
    <S.GlobalStyle/>
    <Navbar/>
    <Header/>
    <NavCategories/>
    <LastMovies/>
    <PopularMovies/>
    <Footer/>
    </>
  );
}