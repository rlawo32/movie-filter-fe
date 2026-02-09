
import styled from "styled-components";

export const Movie = styled('div')`
    position: relative;
    display: flex;
    width: 100%;
    padding: 25px;

    .movie_header {

    }

    .movie_body {
        display: flex;
        align-items: center;
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
    height: 430px;
    width: calc(90% / 5);
    border-radius: 10px;
    background-color: rgb(43 43 48 / 1);
    overflow: hidden;

    .card_container {
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

        .card_head {
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
                background-image: ${({$image}) => "url(" + $image + ")"};
                background-size: 100%;
                background-repeat: no-repeat;
            }

            .card_effect {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(rgba(43, 43, 48, 0) 30%, rgb(43, 43, 48) 90%);
            }
        }

        .card_body {
            position: absolute;
            bottom: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            color: #FFFFFF;

            .card_title {
                padding: 0 15px;
                font-size: 1.6rem;
                font-weight: 700;
            }

            .card_year {
                padding: 5px 15px;
                font-size: 1.2rem;
            }

            .card_genres {
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
                padding: 5px 15px;

                .card_genre {
                    padding: 2px 7px;
                    border: none;
                    border-radius: 7px;
                    background-color: #000000;
                    font-size: 1rem;
                }
            }
        }
    }
`
