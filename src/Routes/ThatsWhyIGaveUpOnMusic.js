import React from "react";
import Main from "./Main";
import { Playlist } from "../Components/Playlist";

export default function ThatsWhyIGaveUpOnMusic() {
    let SpecifiedVideo = Playlist[5]
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