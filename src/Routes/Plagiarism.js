import React from "react";
import Main from "./Main";
import { Playlist } from "../Components/Playlist";

export default function Plagiarism() {
    let SpecifiedVideo = Playlist[2]
    return(
        <Main 
        Source={SpecifiedVideo.Thumbnail} 
        Alt={SpecifiedVideo.Title}
        MusicVideo={SpecifiedVideo.MusicVideo}
        Title={SpecifiedVideo.Title}
        Description={SpecifiedVideo.Description}
        />
    )
}