import Main from "./Main";
import { useState } from "react";
import { Playlist } from "../Components/Playlist";

export default function Plagiarism() {
    let SpecifiedVideo = Playlist[2]
    const [isplaying, setIsplaying] = useState(false)

    function Playing() {
        if (isplaying) { return (<span class="material-symbols-rounded text-7xl">pause_circle</span>) }
        else { return (<span class="material-symbols-rounded text-7xl">play_circle</span>) }
    }

    function handleClick() {
        if (isplaying) { setIsplaying(false); document.getElementById("plagiarism").pause()} 
        else { setIsplaying(true); document.getElementById("plagiarism").play() };
    }

    return(
        <Main id="plagiarism" Poster={SpecifiedVideo.Thumbnail} MusicVideo={SpecifiedVideo.MusicVideo} Title={SpecifiedVideo.Title} Description={SpecifiedVideo.Description}>
            <button onClick={handleClick}>
                <Playing isplaying={isplaying}/>
            </button>
        </Main>
    )
}