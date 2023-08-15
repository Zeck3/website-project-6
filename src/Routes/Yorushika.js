import Main from "./Main";
import { Playlist } from "../Components/Playlist";

export default function Yorushika() {
    let SpecifiedVideo = Playlist[0]
    return(
        <Main showbutton={false} VttLyrics={SpecifiedVideo.Subtitles} Lyrics="yorushikaLyrics" id="yorushika" Poster={SpecifiedVideo.Thumbnail} Description={SpecifiedVideo.Description}/>
    )
}