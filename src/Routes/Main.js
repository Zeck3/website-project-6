import NavBar from "../Components/NavBar";
import Description from "../Components/Description";
import MusicVideo from "../Components/MusicVideo";

export default function Main(props) {
  return (
    <main className="flex relative flex-col justify-between h-screen bg-center bg-cover bg-drop-shadow">
      <MusicVideo id={props.id} Poster={props.Poster} MusicVideo={props.MusicVideo}/>
      <header className="relative flex w-screen h-auto py-10">
        <div className="flex w-full mx-20">
          <div className="flex flex-row w-full gap-20">
            <div className="flex items-center">
              <a className="text-5xl" href="/">ヨルシカ</a>
            </div>
            <NavBar/>
          </div>
        </div>
      </header>
      <section className="relative flex w-screen h-auto py-10">
        <Description Title={props.Title} Description={props.Description}>
          {props.children}
        </Description>
      </section>
    </main>
  );
}
