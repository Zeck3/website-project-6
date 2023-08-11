import React from "react";
 
export default function Fallback() {
    return (
        <div className="absolute flex w-screen h-screen z-50 bg-drop-shadow">
            <span class="material-symbols-outlined animate-spin">
                progress_activity
            </span>
        </div>
    );
}