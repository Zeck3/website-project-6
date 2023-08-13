export default function Description(props) {
    return (
        <div className="flex justify-end w-full mx-20">
            <div className="flex flex-col items-end w-1/2 gap-4">
                <div className="flex flex-row items-center justify-center gap-4">
                    {props.children}
                    <h1 className="flex items-center text-5xl text-right">{props.Title}</h1>
                </div>
                <p className="text-xs text-right">{props.Description}</p>
            </div>
        </div>
    );
}
