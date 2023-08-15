import Main from "./Main";
import { Playlist } from "../Components/Playlist";

export default function Plagiarism() {
    let SpecifiedVideo = Playlist[2]
    return(
        <Main showbutton={true} VttLyrics={SpecifiedVideo.Subtitles} Lyrics="plagiarismLyrics" id="plagiarism" Poster={SpecifiedVideo.Thumbnail} MusicVideo={SpecifiedVideo.MusicVideo} Title={SpecifiedVideo.Title} Description={SpecifiedVideo.Description}/>
    )
}