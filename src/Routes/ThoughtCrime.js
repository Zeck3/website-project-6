import Main from "./Main";
import { Playlist } from "../Components/Playlist";

export default function ThoughtCrime() {
    let SpecifiedVideo = Playlist[1]
    return(
        <Main showbutton={true} VttLyrics={SpecifiedVideo.Subtitles} Lyrics="thoughtcrimeLyrics" id="thoughtcrime" Poster={SpecifiedVideo.Thumbnail} MusicVideo={SpecifiedVideo.MusicVideo} Title={SpecifiedVideo.Title} Description={SpecifiedVideo.Description}/>
    )
}