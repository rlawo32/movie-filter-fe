'use client'

import * as Style from "./option.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSmile as smile
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import useMainProcessStore from "../../stores/useMainProcessStore";

import useSupabaseBrowser from "@/app/supabase/supabase-browser";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { 
    getOptionAllQuery, getOptionPersonnelQuery, getOptionMotionQuery, getOptionGenreQuery 
} from "@/app/queries/getOptionQuery";

const Option = () => {
    const supabase = useSupabaseBrowser();

    const {process, setProcess} = useMainProcessStore();

    const { data: optionAll } = useQuery(getOptionAllQuery(supabase), {staleTime: Infinity, gcTime: 1000 * 60 * 60});
    const { data: optionPersonnel } = useQuery(getOptionPersonnelQuery(supabase), {enabled:process===1});
    const { data: optionMotion } = useQuery(getOptionMotionQuery(supabase), {enabled:process===2});
    const { data: optionGenre } = useQuery(getOptionGenreQuery(supabase), {enabled:process===3});
    const [optionData, setOptionData] = useState<{option_title:string}[]>([]);

    useEffect(() => {
        if(process > 1) setOptionData([]);
        setTimeout(() => {
            if(!!optionAll) {
                if(process === 1) {
                    setOptionData(optionAll.filter((item) => item.option_type === 'P'));
                    console.log("Personnel");
                } else if(process === 2) {
                    setOptionData(optionAll.filter((item) => item.option_type === 'M'));
                    console.log("Motion");
                } else if(process === 3) {
                    setOptionData(optionAll.filter((item) => item.option_type === 'G'));
                    console.log("Genre");
                }
            }
        }, 100)
    }, [process, optionAll])

    return (
        <Style.OverlayStyle> 
            <Style.OptionStyle $process={process}>
                <div className="option_view">
                    {
                        optionData.map((item:any, idx) => {
                            return (
                                <div className="option_item" key={idx}>
                                    {
                                        item.option_id === 'option_1' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_2' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_3' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_4' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_5' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_6' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_7' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_8' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_9' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_10' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_11' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_12' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_13' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_14' ? <FontAwesomeIcon icon={smile} className="option_icon" /> : 
                                        item.option_id === 'option_15' ? <FontAwesomeIcon icon={smile} className="option_icon" /> : 
                                        item.option_id === 'option_16' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_17' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_18' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_19' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_20' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_21' ? <FontAwesomeIcon icon={smile} className="option_icon" /> :
                                        item.option_id === 'option_22' ? <FontAwesomeIcon icon={smile} className="option_icon" /> : <></>
                                    }
                                    {item.option_title}
                                </div>
                            )  
                        })
                    }
                </div>
                <div className="option_next">
                    <button onClick={() => setProcess(process+1)}>
                        {process === 3 ? "완료" : "다음"}
                    </button>
                </div>
            </Style.OptionStyle>
        </Style.OverlayStyle>
    )
}

export default Option;