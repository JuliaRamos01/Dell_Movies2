import { useState, useEffect } from "react";
import * as S from "./PopularMoviesStyle";
import axios from "axios";

export default function LastMovies(){
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() =>{
        getPopularMovies()
    })

    //chamada da API
    const getPopularMovies = async() =>{
        await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=0d1f7f0ebf332899ee06890f9a6ba53a').then(response =>{
            const allApi = response.data.results.map((item) =>{
                return{
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setPopularMovies(allApi)
        })
    }
    return(
        <S.PopularMoviesMain>
            <h1>Em Alta</h1>
            <S.PopularBox>
            {popularMovies.map((item)=>(
                <S.BoxPopularMovies>
                    <img src={item.image} alt={item.title}/>
                    <h2>{item.title}</h2>
                    <h3>{item.release_date}</h3> 
                </S.BoxPopularMovies>
            ))}
            </S.PopularBox>
        </S.PopularMoviesMain>
    );
}