'use client'

import * as Style from "./page.style";

import useMainProcessStore from "../stores/useMainProcessStore";

import Option from "./components/option";
import Movie from "../movie/page";

const Main = () => {

    const {process, setProcess} = useMainProcessStore();

    return (
        <Style.Main>
            <div className="main_start">
                <Option />
                {
                    process === 4 ? 
                        <button className="main_button" onClick={() => setProcess(1)}>시작하기</button> 
                        : 
                    process === 0 ? 
                        <Movie />
                        :
                        <></>
                }
            </div>
        </Style.Main>
    )
}

export default Main;