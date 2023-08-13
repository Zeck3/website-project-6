import React, { useState } from "react";
import { Link } from "react-router-dom";

function Links({Visible}) {
    let visible = Visible
    return (
        <div className="absolute flex flex-col items-start w-full gap-5 top-full pointer-events-auto transition-[opacity,transform] duration-300 ease-in-out" style={{opacity: visible? 1 : 0, transform: visible? 'translateY(0)' : 'translateY(-10px)'}}>
            <Link to="/thoughtCrime" className="inline-block relative"><span className="onhover">Thought Crime</span></Link>
            <Link to="/plagiarism" className="inline-block relative"><span className="onhover">Plagiarism</span></Link>
            <Link to="/prostitution" className="inline-block relative"><span className="onhover">Prostitution</span></Link>
            <Link to="/theSettingSun" className="inline-block relative"><span className="onhover">The Setting Sun</span></Link>
            <Link to="/thatsWhyIGaveUpOnMusic" className="inline-block relative"><span className="onhover">That's Why I Gave Up On Music</span></Link>
        </div>
    )
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
                    <button onClick={handleDropdown} className="relative flex flex-row items-center gap-3 text-xs text-center onhover">
                        YORUSHIKA PLAYLIST
                        <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 6 2">
                            <path d="M 0 0 L 6 0 L 3 2 Z" fill="#F5F5F5"/>
                        </svg>
                    </button>
                    <Links Visible={dropdown}/>
                </li>
                <li className="relative flex items-center justify-center">
                    <a className="relative flex text-xs text-center onhover" href="/">
                        ABOUT
                    </a>
                </li>
            </ul>
        </nav>
    );
}
