'use client'

import * as Style from "./page.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as favorite1 } from "@fortawesome/free-regular-svg-icons";
import { faHeart as favorite2 } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

import useMainProcessStore from "../stores/useMainProcessStore";

import * as data from "./temp";
import Modal from "./components/modal";

const Movie = () => {

    const {process, setProcess} = useMainProcessStore();

    const [modalData, setModalData] = useState<{
        id: number,
        title: string,
        year: string,
        matchRate: number,
        genres: string[],
        summary: string,
        poster: string,
        backdrop: string,
        platforms: {
          name: string,
          logo: string
        }[]
    } | null>();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // mount 오류 처리
        setIsMounted(true);
    }, []);

    return (
        <Style.Movie>
            <div className="movie_header">
                
            </div>
            <div className="movie_body">
                {modalData && (<Modal data={modalData} onClose={() => setModalData(null)} />)}
                <div className="list_section">
                    {isMounted && data.data.map((item, idx1) => {
                        return (
                            <Style.MovieCard $image={item.poster} $idx={idx1} key={idx1} onClick={() => setModalData(item)}>
                                <div className="card_container">
                                    <button className="card_favorite" onClick={(e) => { e.stopPropagation(); }}>
                                        <FontAwesomeIcon icon={favorite1} className="icon" />
                                    </button>
                                    <div className="card_head">
                                        <div className="card_image" />
                                        <div className="card_effect" />
                                    </div>
                                    <div className="card_body">
                                        <div className="card_ott">
                                            {item.platforms.map((platform, idx2) => {
                                                return (
                                                    <Style.PlatformBadge $image={platform.name} key={platform.name + idx2} />
                                                )
                                            })} 
                                        </div>
                                        <div className="card_content">
                                            <div className="card_genres">
                                                {item.genres.map((genre, idx3) => {
                                                    return (
                                                        <div className="card_genre" key={"genre_" + idx3}>{genre}</div>
                                                    )
                                                })} 
                                            </div>
                                            <div className="card_title">{item.title}</div>
                                            <div className="card_year">{item.year}</div>
                                        </div>
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
