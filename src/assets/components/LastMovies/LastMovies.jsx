import { useState, useEffect } from "react";
import * as S from "./LastMoviesStyle";
import axios from "axios";
import Slider from "react-slick";


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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return(
        <S.LastMoviesMain>
            <h1>Últimos Lançamentos</h1>
            {lastMovies.map((item)=>(
                <S.BoxLastMovies>
                    <Slider {...settings}> {/* problema no slider */}
                    <img src={item.image} alt={item.title}/>
                    <h2>{item.title}</h2>
                    <h3>{item.release_date}</h3> 
                    </Slider>
                </S.BoxLastMovies>
            ))}
        </S.LastMoviesMain>
    );
    }