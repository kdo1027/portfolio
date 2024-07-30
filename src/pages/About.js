import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const secondmajors = [
  "mathematics 📐",
  "economics 💵",
  "business ♣",
  "statistics & analytics 📈",
  "data science 🗄️",
  "public policy ⚖",
  "digital media 📱",
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

function About() {
  useEffect(() => {
    document.title = "kdo.me ヾ( ˃ᴗ˂ )◞ • *✰";
  }, []);

  const [mymajors, handleMajorClick] = useWordCycle(secondmajors);


  return (
    <div>
      {/* <img src="/images/profile.png" alt="my picture :>" width="150" height="auto" style={{ borderRadius: '50%' }}/> */}
      {/* <img src="/images/profile.png" width="200" height="auto"/> */}
      <br/>
      <br/>
      <p>
        hey! welcome to my space! here are some (random?) facts about me (˵ •̀ ᴗ - ˵ ) ✧
        <br />
        <br />
        i’m nic(holas), but i go online by kdo (short for my real name). 
        <br />
        <br />
        i love reading, traveling, listening to music, observing surroundings, and learning new things 👀.
        you can usually find me taking long walks, sitting in a coffee shop all day, and trying to craft a random idea out of my head. 
        sometimes, i just love to go around and try new things at every opportunity while pushing myself out of my comfort zone ˙✧˖°📷 ༘ ⋆｡˚. 
        <br />
        <br />
        i learned how to code while thinking about how to turn a random lego into a personal assistant. 
        i’ve created various digital apps aimed at helping people in my community and beyond, striving to revolutionize fields ranging from finance to healthcare. 
        i love to create meaningful technologies that make the world a better place and simplify life for everyone. ‧₊˚🖇️✩ ₊˚🎧⊹♡
        <br />
        <br />
        also, i like to learn as much as i can from the amazing people around me so plz connect!!! (˶˃ ᵕ ˂˶) 🌟
      </p>
      <br/>
      <p>
        <h2>currently</h2>
      </p>
      <p>
        i'm a sophomore at{" "}
        <a href="https://www.unc.edu/" target="_blank" class="clickable">
          unc-chapel hill 🐏
        </a>
        , working on my {" "} <a href="https://cs.unc.edu/" target="_blank" class="clickable">computer science 🧑🏻‍💻</a> and{" "}
        <a class="clickable" id="majors" onClick={handleMajorClick}>
          {mymajors}
        </a> degree! 🩵
        <br />
        <br />
        i’m interested in human-computer interaction 🗯, and all creative intersections of tech, media, and healthcare. 
        my research interests are in machine learning, natural language processing, computer vision. 
        however, I’m always open to exploring new and exciting opportunities. (っ'ヮ'c)

      </p>
      <br />
      <p>
        <h2>previously</h2>
        <p>did some internships & research</p>
      </p>
      <ul>
        <li>
          created websites for non-profits (
          <a
            href="https://www.developforgood.org/?gad_source=1&gclid=CjwKCAjw17qvBhBrEiwA1rU9w1hYghMW1CtS04zqAlNYKxDJpogjQdA3uJmktljnX9y-lx26vqhkKhoC5JwQAvD_BwE"
            class="clickable"
            target="_blank"
          >
            Develop for Good
          </a>
          )
        </li>
        <li>
        analyzed sentiments of historical contents  (
          <a
            href="https://denison.edu/academics/digital-humanities"
            class="clickable"
            target="_blank"
          >
            Denison Digital Humanities
          </a>
          ) 
        </li>
        <li>
          developed financial dashboards and deployed sap systems (
          <a
            href="https://www.grantthornton.com.vn/services/technology-solutions-consulting/"
            class="clickable"
            target="_blank"
          >
            Grant Thornton Vietnam
          </a>
          )
        </li>
        <li>
          worked full-stack on a travelling app (
          <a
            href="https://apps.apple.com/lt/app/campdi/id1637548437"
            class="clickable"
            target="_blank"
          >
            Campdi
          </a>
          )
        </li>
        <li>
          worked on new game features for vietnam’s largest streaming platform (
          <a
            href="https://fptplay.vn/"
            class="clickable"
            target="_blank"
          >
            FPT Play
          </a>
          )
        </li>
      </ul>
      <p>some clubs</p>
      <ul>
      <li>
        wrote some code and curated the attendee experience for{" "}
          <a
            href="https://hacknc.com/"
            target="_blank"
            class="clickable"
          >
            HackNC
          </a>
        </li> 
        <li>
          mentored high schoolers participating in science fairs
        </li>
      </ul>
      <br />
      {/* <p>
        <h2>others</h2>
        <p>some of my current favourite songs:</p>
      </p>
      <ul>
        <li>
          <a
              href=""
              target="_blank"
              class="clickable"
            >
              
            </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=phuiiNCxRMg"
            target="_blank"
            class="clickable" 
          >
            Supernova - aespa
          </a>
        </li>
      </ul> */}
      <p>still don't know who i am? see what{" "} 
        <a
          href="https://www.16personalities.com/intj-personality"
          target="_blank"
          class="clickable">16personalities</a> said about me!
      </p>
    </div>
  );
}

export default About;