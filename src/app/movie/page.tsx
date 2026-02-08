'use client'

import * as Style from "./page.style";

import useMainProcessStore from "../stores/useMainProcessStore";

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
                            <div className="movie_card" key={idx1}>
                                <div className="card_image">
                                    <img src={item.poster} alt={item.title} />
                                </div>
                                <div className="card_content">
                                    <div className="card_title">{item.title}</div>
                                    <div className="card_year">{item.year}</div>
                                    <div className="card_genres">
                                        {item.genres.map((genre, idx2) => {
                                            return (
                                                <div className="card_genre" key={idx2}>{genre}</div>
                                            )
                                        })} 
                                    </div>
                                </div>
                            </div>
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