import Main from "./Main";
import { useState } from "react";
import { Playlist } from "../Components/Playlist";

export default function ThatsWhyIGaveUpOnMusic() {
    let SpecifiedVideo = Playlist[5]
    const [isplaying, setIsplaying] = useState(false)

    function Playing() {
        if (isplaying) { return (<span class="material-symbols-rounded text-7xl drop-shadow-xl">pause_circle</span>) }
        else { return (<span class="material-symbols-rounded text-7xl drop-shadow-xl">play_circle</span>) }
    }

    function handleClick() {
        if (isplaying) { setIsplaying(false); document.getElementById("thatswhyigaveuponmusic").pause()} 
        else { setIsplaying(true); document.getElementById("thatswhyigaveuponmusic").play() };
    }

    return(
        <Main VttLyrics={SpecifiedVideo.Subtitles} Lyrics="thatswhyigaveuponmusicLyrics" id="thatswhyigaveuponmusic" Poster={SpecifiedVideo.Thumbnail} MusicVideo={SpecifiedVideo.MusicVideo} Title={SpecifiedVideo.Title} Description={SpecifiedVideo.Description}>
            <button onClick={handleClick}>
                <Playing isplaying={isplaying}/>
            </button>
        </Main>
    )
}