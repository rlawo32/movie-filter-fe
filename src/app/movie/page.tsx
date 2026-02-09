'use client'

import * as Style from "./page.style";

import useMainProcessStore from "./stores/useModalProcessStore";

import * as data from "./temp";

const Movie = () => {

    const {process, setProcess} = useMainProcessStore();

    return (
        <Style.Movie>
            <div className="movie_header">
                
            </div>
            <div className="movie_body">
                <div className="list_section">
                    {data.data.map((item, idx1) => {
                        return (
                            <Style.MovieCard $image={item.poster} key={idx1}>
                                <div className="card_container">
                                    <div className="card_head">
                                        <div className="card_image"></div>
                                        <div className="card_effect"></div>
                                    </div>
                                    <div className="card_body">
                                        <div className="card_genres">
                                            {item.genres.map((genre, idx2) => {
                                                return (
                                                    <div className="card_genre" key={idx2}>{genre}</div>
                                                )
                                            })} 
                                        </div>
                                        <div className="card_title">{item.title}</div>
                                        <div className="card_year">{item.year}</div>
                                    </div>
                                </div>
                            </Style.MovieCard>
                        )
                    })}
                </div>
                <div className="button_section">

                </div>
            </div>
        </Style.Movie>
    )
}

export default Movie;
