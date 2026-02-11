'use client'

import * as Style from "./page.style";

import useMainProcessStore from "../stores/useMainProcessStore";

import Option from "./components/option";
import Movie from "../movie/page";

const Main = () => {

    const {process, setProcess} = useMainProcessStore();

    return (
        <Style.Main>
            <Option />
            {
                // process 0:시작 -> 1:인원 -> 2:감정 -> 3:장르 -> 4:결과 
                process === 4 ? 
                    <div className="main_start">
                        <button className="main_button" onClick={() => setProcess(1)}>시작하기</button> 
                    </div>
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