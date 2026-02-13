'use client'

import * as Style from "./modal.style";

import { useEffect, useState } from "react";

interface ModalProps {  
    data: {
        id: number,
        title: string,
        year: string,
        matchRate: number,
        genres: string[],
        overview: string,
        poster: string,
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
            <Style.ModalContent $isClosing={isClose} $image={props.data.poster} onClick={(e) => e.stopPropagation()}>
                <div className="modal_head">

                </div>
                <div className="modal_body">

                </div>
                <h1>HELLO</h1>
                {props.data.title}
            </Style.ModalContent>
        </Style.ModalOverlay>
    )
}

export default Modal;
