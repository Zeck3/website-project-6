import NavBar from "../Components/NavBar";
import Description from "../Components/Description";
import MusicVideo from "../Components/MusicVideo";
import { useEffect } from "react";

export default function Main(props) {
  const main = async () => {
    const dom = {
        lyric: document.getElementById(props.Lyrics),
        player: document.getElementById(props.id)
    };

    const res = await fetch(props.VttLyrics);
    const vtt = await res.text();
    const lyrics = parseVtt(vtt);

    dom.player.ontimeupdate = () => {
        const time = dom.player.currentTime;
        const index = syncLyric(lyrics, time);

        if (index == null) {
            dom.lyric.innerHTML = "";
            return;
        }

        dom.lyric.innerHTML = lyrics[index].text;
    };
  };

  const parseVtt = (vtt) => {
      const regex = /^(?<start>\d{2}:\d{2}:\d{2}.\d{3}?) --> (?<end>\d{2}:\d{2}:\d{2}.\d{3}?)\r\n(?<text>.*)$/gm;
      const matches = [...vtt.matchAll(regex)];
      const output = [];

      matches.forEach(match => {
          const startTime = parseTime(match[1]);
          const endTime = parseTime(match[2]);
          const text = match[3].trim();

          output.push({
              startTime,
              endTime,
              text
          });
      });

      function parseTime(time) {
          const timeComponents = time.split(':').map(parseFloat);
          const hoursToSeconds = timeComponents[0] * 3600;
          const minutesToSeconds = timeComponents[1] * 60;
          const seconds = timeComponents[2];
          return hoursToSeconds + minutesToSeconds + seconds;
      }

      return output;
  }

  const syncLyric = (lyrics, time) => {
      const validLyrics = lyrics.filter(lyric => time >= lyric.startTime && time <= lyric.endTime);

      if (validLyrics.length === 0) {
          return null;
      }

      const closestLyric = validLyrics.reduce((prevLyric, currentLyric) => {
          const prevTimeDifference = Math.abs(prevLyric.startTime - time);
          const currentTimeDifference = Math.abs(currentLyric.startTime - time);

          return currentTimeDifference < prevTimeDifference ? currentLyric : prevLyric;
      });

      return lyrics.indexOf(closestLyric);
  }

  useEffect(() => {
    main()
  })
  
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
        <Description Lyrics={props.Lyrics} Title={props.Title} Description={props.Description}>
          {props.children}
        </Description>
      </section>
    </main>
  );
}
