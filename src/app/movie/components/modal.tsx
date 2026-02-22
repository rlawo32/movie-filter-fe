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
        }[]
    };
    onClose: () => void;
}

const Modal = (props : ModalProps) => {

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
                    </div>
                </div>
            </Style.ModalContent>
        </Style.ModalOverlay>
    )
}

export default Modal;
