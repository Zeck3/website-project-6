export default function Fallback() {
    return (
        <div className="absolute flex justify-center items-center w-screen top-0 h-screen z-30 bg-black">
            <span class="material-symbols-rounded animate-spin text-9xl">
                progress_activity
            </span>
        </div>
    );
}