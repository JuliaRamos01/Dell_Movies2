import * as S from "./assets/components/GlobalStyle";
import Navbar from "./assets/components/Navbar/Navbar";
import Header from "./assets/components/Header/Header";
import NavCategories from "./assets/components/NavCategories/NavCategories";

export default function App() {
  return (
    <>
    <S.GlobalStyle/>
    <Navbar/>
    <Header/>
    <NavCategories/>
    </>
  );
}