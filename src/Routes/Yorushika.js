import Main from "./Main";
import { Playlist } from "../Components/Playlist";

export default function Yorushika() {
    let SpecifiedVideo = Playlist[0]
    return(
        <Main Poster={SpecifiedVideo.Thumbnail} Description={SpecifiedVideo.Description}/>
    )
}