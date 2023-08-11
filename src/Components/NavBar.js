import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Links({isVisible}) {
    if (isVisible) {
        return (
            <div className="absolute flex flex-col items-start w-full gap-5 top-16 transition-opacity delay-150 duration-300 ease-in-out">
                <Link to="/thoughtCrime"><span className="onhover after:top-4">Thought Crime</span></Link>
                <Link to="/plagiarism">Plagiarism</Link>
                <Link to="/prostitution">Prostitution</Link>
                <Link to="/theSettingSun">The Setting Sun</Link>
                <Link to="/thatsWhyIGaveUpOnMusic">That's Why I Gave Up On Music</Link>
                <Outlet/>
            </div>
        )
    }  else { return ( null ) }
}

export default function NavBar() {
    const[dropdown, setDropdown] = useState(false);
    
    function handleDropdown() {
        if (dropdown) {
            setDropdown(false)
        } else {
            setDropdown(true)
        };
    }

    return (
        <nav className="flex flex-row">
            <ul className="flex flex-row gap-10">
                <li className="relative flex items-center justify-center">
                    <button onClick={handleDropdown} className="flex flex-row items-center gap-3 text-xs text-center onhover after:top-8">
                        YORUSHIKA PLAYLIST
                        <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 6 2">
                            <path d="M 0 0 L 6 0 L 3 2 Z" fill="#F5F5F5"/>
                        </svg>
                    </button>
                    <Links isVisible={dropdown}/>
                </li>
                <li className="relative flex items-center justify-center">
                    <a className="text-xs text-center onhover after:top-8" href="/">
                        ABOUT
                    </a>
                </li>
            </ul>
        </nav>
    );
}
