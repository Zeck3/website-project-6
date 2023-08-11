import React from "react";

export default function Thumbnail(props) {
    return (
        <img className="absolute bottom-0 right-0 flex object-cover w-full h-full -z-20 ease-in" src={props.Source} alt={props.Alt}></img>
    )
}