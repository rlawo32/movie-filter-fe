'use client'

import * as Style from "./page.style";

import useMainProcessStore from "../stores/useMainProcessStore";

import Option from "./components/option";
import Movie from "../movie/page";
import { useEffect } from "react";

const Main = () => {

    const {process, setProcess} = useMainProcessStore();

    useEffect(() => {
        localStorage.setItem('user_id', '1');
    }, []);

    return (
        <Style.Main>
            
            {
                process === 4 ? 
                    <div className="main_start">
                        <button className="main_button" onClick={() => setProcess(1)}>시작하기</button> 
                    </div>
                    :
                process > 0 && process < 4? 
                    <Option />
                    : 
                process === 0 ? 
                    <Movie />
                    :
                    <></>
            }
        </Style.Main>
    )
}

export default Main;