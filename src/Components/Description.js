import React from "react";

export default function Description(props) {
    return (
        <div className="flex justify-end w-full mx-20">
            <div className="flex flex-col items-end w-2/5 gap-4">
                <h1 className="text-5xl text-right">{props.Title}</h1>
                <p className="text-xs text-right">
                    {props.Description}
                </p>
            </div>
        </div>
    );
}
