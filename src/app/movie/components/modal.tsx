'use client'

import CloseIcon from "./closeIcon";
import * as Style from "./modal.style";

import { useEffect, useState } from "react";

interface ModalProps {  
    data: {
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
        }[],
        rating: {
          name: string,
          score: number
        }[]
    };
    onClose: () => void;
}

const Modal = (props : ModalProps) => {

    const defaultImageUrl:string|undefined = process.env.NEXT_PUBLIC_DEFAULT_IMAGE_URL;
    const [isClose, setIsClose] = useState<boolean>(false);

    const handleClose = () => {
        if(isClose) return;
        setIsClose(true);
        setTimeout(() => {
            props.onClose();
        }, 200)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        // document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [props.onClose]);

    return (
        <Style.ModalOverlay $isClosing={isClose} onClick={handleClose}>
            <Style.ModalContent $isClosing={isClose} $image={props.data.backdrop} onClick={(e) => e.stopPropagation()}>
                <button className="modal_close" onClick={() => handleClose()}><CloseIcon /></button>
                <div className="modal_head" />
                <div className="modal_body">
                    <div className="modal_content_bottom"></div>
                    <div className="modal_content_top">
                        <div className="modal_content_left">
                            <div className="movie_title">
                                {props.data.title}
                            </div>
                            <div className="movie_genres">
                                {props.data.genres.map((genre, idx) => {
                                    return (
                                        <div className="movie_genre" key={"genre_" + idx}>{genre}</div>
                                    )
                                })} 
                            </div>
                            <div className="movie_summary">
                                {props.data.summary}
                            </div>
                            <div className="movie_shortcut">
                                {props.data.platforms.map((platform, idx) => {
                                    return (
                                        <Style.PlatformBadge $image={platform.name} key={"ott_" + idx} />
                                    )
                                })} 
                            </div>
                        </div>
                        <div className="modal_content_right">
                            {props.data.rating.map((rate, idx) => {
                                const score = rate.name === 'IMDB' || rate.name === 'TMDB' ? rate.score * 10 : rate.score;
                                return (
                                    <Style.RatingBadge $score={score} key={"ott_" + idx}>
                                        <div className="rating_score">
                                            <img src={defaultImageUrl + "/platform/" + rate.name + ".svg"} alt="rating_platform" />
                                            <div className="score_detail">
                                                <div className="score_view">
                                                    {rate.name === 'IMDB' ? score / 10 : score}{rate.name === 'TOMATO' || rate.name === 'TMDB' ? '%' : ''}
                                                </div>
                                                <div className="score_title">
                                                    {rate.name === 'TOMATO' ? 'Tomatometer' : rate.name === 'METACRITIC' ? 'Metascore' : rate.name}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rating_graph">
                                            <div className="graph_container">
                                                <div className="graph_bar">
                                                    <div className="graph_glow" />
                                                </div>
                                            </div>
                                        </div>
                                    </Style.RatingBadge>
                                )
                            })} 
                        </div>
                    </div>
                </div>
            </Style.ModalContent>
        </Style.ModalOverlay>
    )
}

export default Modal;
