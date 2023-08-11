import React from "react";

export default function MusicVideo(props) {
    return (
        <video className="absolute bottom-0 right-0 flex object-cover w-full h-full -z-10 ease-in" autoPlay muted loop playsInline>
            <source src={props.MusicVideo}></source>
        </video>
    );
}