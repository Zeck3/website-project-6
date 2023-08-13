import React from "react";
import { useState } from "react";

function Playing({ isplaying }) {
    if (isplaying) { return (<span class="material-symbols-rounded text-7xl">play_circle</span>) } 
    else { return (<span class="material-symbols-rounded text-7xl">pause_circle</span>) }
}
 
export default function Description(props) {
    const [isplaying, setIsplaying] = useState(false)

    function handleClick() {
        if (isplaying) {
            setIsplaying(false)
        } else {
            setIsplaying(true)
        };
    }

    return (
        <div className="flex justify-end w-full mx-20">
            <div className="flex flex-col items-end w-1/2 gap-4">
                <div className="flex flex-row items-center justify-center gap-4">
                    <button onClick={handleClick}>
                        <Playing isplaying={isplaying}/>
                    </button>
                    <h1 className="flex items-center text-5xl text-right">{props.Title}</h1>
                </div>
                <p className="text-xs text-right">{props.Description}</p>
            </div>
        </div>
    );
}
