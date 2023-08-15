import Main from "./Main";
import { Playlist } from "../Components/Playlist";

export default function Prostitution() {
    let SpecifiedVideo = Playlist[3]
    return(
        <Main showbutton={true} VttLyrics={SpecifiedVideo.Subtitles} Lyrics="prostitutionLyrics" id="prostitution" Poster={SpecifiedVideo.Thumbnail} MusicVideo={SpecifiedVideo.MusicVideo} Title={SpecifiedVideo.Title} Description={SpecifiedVideo.Description}/>
    )
}