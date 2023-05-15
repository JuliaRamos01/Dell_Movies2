import { useState, useEffect } from "react";
import * as S from "./LastMoviesStyle";
import axios from "axios";

export default function LastMovies(){
    const [lastMovies, setLastMovies] = useState([])

    useEffect(() =>{
        getLastMovies()
    })

    //chamada da API
    const getLastMovies = async() =>{
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0d1f7f0ebf332899ee06890f9a6ba53a').then(response =>{
            const allApi = response.data.results.map((item) =>{
                return{
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setLastMovies(allApi)
        })
    }

    
    return(
        <S.LastMoviesMain>
            {lastMovies.map((item)=>(
                <S.BoxLastMovies>
                    <img src={item.image} alt={item.title}/>
                    <h2>{item.title}</h2>
                    <h3>{item.release_date}</h3> {/* parei aqui */}
                </S.BoxLastMovies>
            ))}
        </S.LastMoviesMain>
    );
}