import styled from "styled-components";

export const Movie = styled('div')`
    position: relative;
    display: flex;
    width: 100%;
    height: fit-content;
    padding: 80px 25px;

    .movie_header {

    }

    .movie_body {
        display: flex;
        justify-content: center;
        width: 100%;

        .list_section {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            gap: 15px;
            width: 80%;

        }
        .button_section {

        }
    }
`

export const MovieCard = styled('div')<{$image:string}>`
    position: relative;
    @media (max-width: 1440px) {
        width: calc(90% / 4);
    }
    @media (max-width: 768px) {
        width: 100%;
        aspect-ratio: 4 / 2;
    }
    width: calc(90% / 5);
    aspect-ratio: 3 / 5;
    border-radius: 10px;
    background-color: rgb(43 43 48 / 1);
    overflow: hidden;
    cursor: pointer;

    .card_container {
        @media (max-width: 768px) {
            flex-direction: row;
        }
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;

        &:hover > .card_head > .card_image {
            transition: transform .4s ease-in-out;
            transform: translate(0, 0) rotate(0) skewX(0) skewY(0) scaleX(1.1) scaleY(1.1);
        }

        &:not(:hover) > .card_head > .card_image {
            transition: transform .4s ease-in-out;
        }

        .card_favorite {
            @media (max-width: 768px) {
                top: 7px;
                right: 7px;
            }
            position: absolute;
            top: 5px;
            right: 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25px;
            height: 25px;
            padding: 0;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            color: #FFFFFF;
            line-height: 0;
            background: rgba(255, 255, 255, 0.2); 
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 99;

            &:hover {
                background: rgba(255, 255, 255, 0.4);
                transform: scale(1.1);
            }

            .icon {
                filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
            }
        }

        .card_head {
            @media (max-width: 768px) {
                width: 50%;
                height: 100%;
            }
            position: relative;
            width: 100%;
            height: 95%;
            overflow: hidden;

            .card_image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 99%;
                background-image: ${({$image}) => "url('" + $image + "')"};
                background-size: 100%;
                background-repeat: no-repeat;
            }

            .card_effect {
                @media (max-width: 768px) {
                    background-image: linear-gradient(rgba(43, 43, 48, 0) 40%, rgb(43, 43, 48) 95%);
                }
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(rgba(43, 43, 48, 0) 30%, rgb(43, 43, 48) 90%);
            }
        }

        .card_body {
            @media (max-width: 768px) {
                position: relative;
                align-items: flex-start;
                padding: 20px 5px;
            }
            position: absolute;
            bottom: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            color: #FFFFFF;

            .card_title {
                @media (max-width: 1024px) {
                    font-size: 1.2rem;
                }
                @media (max-width: 768px) {
                    font-size: 1.8rem;
                }
                padding: 0 15px;
                font-size: 1.5rem;
                font-weight: 700;
            }

            .card_year {
                @media (max-width: 1024px) {
                    font-size: 1rem;
                }
                @media (max-width: 768px) {
                    font-size: 1.2rem;
                }
                padding: 5px 15px;
                font-size: 1.2rem;
            }

            .card_genres {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 5px;
                padding: 5px 15px;

                .card_genre {
                    @media (max-width: 1024px) {
                        font-size: .8rem;
                    }
                    @media (max-width: 768px) {
                        font-size: 1rem;
                    }
                    padding: 0 7px;
                    border: none;
                    border-radius: 7px;
                    background-color: #000000;
                    font-size: 1rem;
                    line-height: 1.7;
                }
            }
        }
    }
`
