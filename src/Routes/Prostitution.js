import React from "react";
import Main from "./Main";
import { Playlist } from "../Components/Playlist";

export default function Prostitution() {
    let SpecifiedVideo = Playlist[3]
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