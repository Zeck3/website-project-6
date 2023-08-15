export default function Fallback() {
    return (
        <div className="absolute flex justify-center items-center w-screen top-0 h-screen z-30 bg-black transition-opacity duration-1000 ease-in-out">
            <span className="material-symbols-rounded animate-spin text-9xl">
                progress_activity
            </span>
        </div>
    );
}