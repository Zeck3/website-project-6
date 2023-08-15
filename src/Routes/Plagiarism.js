import Main from "./Main";
import { useEffect, useState } from "react";
import { Playlist } from "../Components/Playlist";

export default function Plagiarism() {
    let SpecifiedVideo = Playlist[2]
    const [isplaying, setIsplaying] = useState(false)

    function Playing() {
        if (isplaying) { return (<span class="material-symbols-rounded text-7xl drop-shadow-xl">pause_circle</span>) }
        else { return (<span class="material-symbols-rounded text-7xl drop-shadow-xl">play_circle</span>) }
    }

    function handleClick() {
        if (isplaying) { setIsplaying(false); document.getElementById("plagiarism").pause()} 
        else { setIsplaying(true); document.getElementById("plagiarism").play() };
    }

    useEffect(() => {
        if (document.getElementById("plagiarism").ended) {
            setIsplaying(false)
            document.getElementById("plagiarism").currentTime = 0
        }
    }, [setIsplaying])

    return(
        <Main VttLyrics={SpecifiedVideo.Subtitles} Lyrics="plagiarismLyrics" id="plagiarism"  Poster={SpecifiedVideo.Thumbnail} MusicVideo={SpecifiedVideo.MusicVideo} Title={SpecifiedVideo.Title} Description={SpecifiedVideo.Description}>
            <button onClick={handleClick}>
                <Playing isplaying={isplaying}/>
            </button>
        </Main>
    )
}