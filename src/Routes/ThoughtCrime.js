import Main from "./Main";
import { useState } from "react";
import { Playlist } from "../Components/Playlist";

export default function ThoughtCrime() {
    let SpecifiedVideo = Playlist[1]
    const [isplaying, setIsplaying] = useState()

    function Playing() {
        if (isplaying) { return (<span class="material-symbols-rounded text-7xl drop-shadow-xl">pause_circle</span>) }
        else { return (<span class="material-symbols-rounded text-7xl drop-shadow-xl">play_circle</span>) }
    }

    function handleClick() {
        if (isplaying) { setIsplaying(false); document.getElementById("thoughtcrime").pause()} 
        else { setIsplaying(true); document.getElementById("thoughtcrime").play() };
    }

    return(
        <Main VttLyrics={SpecifiedVideo.Subtitles} Lyrics="thoughtcrimeLyrics" id="thoughtcrime" Poster={SpecifiedVideo.Thumbnail} MusicVideo={SpecifiedVideo.MusicVideo} Title={SpecifiedVideo.Title} Description={SpecifiedVideo.Description}>
            <button onClick={handleClick}>
                <Playing isplaying={isplaying}/>
            </button>
        </Main>
    )
}