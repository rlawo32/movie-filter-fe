'use client'

import * as Style from "./page.style";

import useMainProcessStore from "../stores/useMainProcessStore";

import Option from "./components/option";

const Main = () => {

    const {process, setProcess} = useMainProcessStore();

    return (
        <Style.Main>
            <div className="main_start">
                {process > 0 ? <Option /> : <button className="main_button" onClick={() => setProcess(1)}>시작하기</button>}
            </div>
        </Style.Main>
    )
}

export default Main;