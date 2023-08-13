import Main from "./Main";
import { useState } from "react";
import { Playlist } from "../Components/Playlist";

export default function TheSettingSun() {
    let SpecifiedVideo = Playlist[4]
    const [isplaying, setIsplaying] = useState(false)

    function Playing() {
        if (isplaying) { return (<span class="material-symbols-rounded text-7xl">pause_circle</span>) }
        else { return (<span class="material-symbols-rounded text-7xl">play_circle</span>) }
    }

    function handleClick() {
        if (isplaying) { setIsplaying(false); document.getElementById("thesettingsun").pause()} 
        else { setIsplaying(true); document.getElementById("thesettingsun").play() };
    }

    return(
        <Main id="thesettingsun" Poster={SpecifiedVideo.Thumbnail} MusicVideo={SpecifiedVideo.MusicVideo} Title={SpecifiedVideo.Title} Description={SpecifiedVideo.Description}>
            <button onClick={handleClick}>
                <Playing isplaying={isplaying}/>
            </button>
        </Main>
    )
}