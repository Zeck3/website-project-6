import Main from "./Main";
import { Playlist } from "../Components/Playlist";

export default function ThatsWhyIGaveUpOnMusic() {
    let SpecifiedVideo = Playlist[5]
    return(
        <Main showbutton={true} VttLyrics={SpecifiedVideo.Subtitles} Lyrics="thatswhyigaveuponmusicLyrics" id="thatswhyigaveuponmusic" Poster={SpecifiedVideo.Thumbnail} MusicVideo={SpecifiedVideo.MusicVideo} Title={SpecifiedVideo.Title} Description={SpecifiedVideo.Description}/>
    )
}