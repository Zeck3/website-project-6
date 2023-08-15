import Main from "./Main";
import { Playlist } from "../Components/Playlist";

export default function TheSettingSun() {
    let SpecifiedVideo = Playlist[4]
    return(
        <Main showbutton={true} VttLyrics={SpecifiedVideo.Subtitles} Lyrics="thesettingsunLyrics" id="thesettingsun" Poster={SpecifiedVideo.Thumbnail} MusicVideo={SpecifiedVideo.MusicVideo} Title={SpecifiedVideo.Title} Description={SpecifiedVideo.Description}/>
    )
}