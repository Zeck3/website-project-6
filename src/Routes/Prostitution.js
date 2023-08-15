import Main from "./Main";
import { useState } from "react";
import { Playlist } from "../Components/Playlist";

export default function Prostitution() {
    let SpecifiedVideo = Playlist[3]
    const [isplaying, setIsplaying] = useState(false)

    function Playing() {
        if (isplaying) { return (<span class="material-symbols-rounded text-7xl drop-shadow-xl">pause_circle</span>) }
        else { return (<span class="material-symbols-rounded text-7xl drop-shadow-xl">play_circle</span>) }
    }

    function handleClick() {
        if (isplaying) { setIsplaying(false); document.getElementById("prostitution").pause()} 
        else { setIsplaying(true); document.getElementById("prostitution").play() };
    }

    return(
        <Main VttLyrics={SpecifiedVideo.Subtitles} Lyrics="prostitutionLyrics" id="prostitution" Poster={SpecifiedVideo.Thumbnail} MusicVideo={SpecifiedVideo.MusicVideo} Title={SpecifiedVideo.Title} Description={SpecifiedVideo.Description}>
            <button onClick={handleClick}>
                <Playing isplaying={isplaying}/>
            </button>
        </Main>
    )
}