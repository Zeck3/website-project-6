import Main from "./Main";
import { Playlist } from "../Components/Playlist";

export default function About() {
    let SpecifiedVideo = Playlist[6]
    return(
        <Main showbutton={false} VttLyrics={SpecifiedVideo.Subtitles} Lyrics="aboutLyrics" id="about" Poster={SpecifiedVideo.Thumbnail} Description={SpecifiedVideo.Description}/>
    )
}