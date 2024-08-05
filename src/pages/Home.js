import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const hobbies = [
  "whisking matcha 🍵",
  "writing journal 🗒️",
  "watching modern family and suits 🎬",
  "fast walking to classes 🚶🏼",
  "pretending to be busy ( ◡̀_◡́)ᕤ",
  "teasing my cat 😽",
  "restocking my stationery collection 🗂️",
  "simping over my celebrity crushes (づ ᴗ _ᴗ)づ♡",
  "crafting new playlist ⋆.˚✮🎧✮˚.⋆",
  "collecting kpop albums (go aespa & nct) 📀",
  "struggling to fix the code i broke (ง ◉ _ ◉)ง",
  "walking through coffee shops ₊˚.🎧 ✩｡☕ 🤎",
  "adding n items into my shopping cart 💳",
  "scrolling through insta reels 📩",
  "rewatching kdramas for the 3rd time 🍿🎥✮⋆˙",
  "trying to be a morning person ☀️🪴🍳🧘‍♀️☕️",
  "figuring out what to eat 🍝🥢♡ ༘*.ﾟ",
];


function useWordCycle(words) {
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const handleClick = () => {
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  };

  return [currentWord, handleClick];
}

function Home() {
  useEffect(() => {
    document.title = "kdothings ⸜(｡˃ ᵕ ˂)⸝♡";
  }, []);

  const [currentHobby, handleHobbyClick] = useWordCycle(hobbies);

  return (
    <div className="container">
      <h2>hi! i'm nic!</h2>
      <p>
        welcome to my little space!</p>
      <p>
        from hanoi, vietnam, i'm currently a <a href = "https://www.unc.edu/" class="clickable">full-time student</a>, programmer, maker, researcher, and barista. when i'm not trying to be a pioneer or an academic weapon, you can easily catch me learning about
        human-computer interactions 🤖, taking 35mm films  🎞️, and{" "}
        <a class="clickable" id="hobbies" onClick={handleHobbyClick}>
          {currentHobby}
        </a>
        .
      </p>
      <p>
        reach out to me anytime at{" "}
        <a href="mailto:nicholasdo.work@gmail.com" class="clickable">
          nicholasdo.work@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Home;