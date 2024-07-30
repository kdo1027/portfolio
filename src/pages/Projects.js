import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Projects() {
  useEffect(() => {
    document.title = "kdo's projects 🩵";
  }, []);

  return (
    <div>
      <p>
        still cooking! nicer things coming soon. in the meantime, please check out my{" "}
        <a href="https://github.com/kdo1027" class="clickable" target="_blank">
          github
        </a>{" "}
        <nobr>(´ ▽ `)✧</nobr>
      </p>
      <br />
      <p>
        <a href="https://github.com/stephanienguyen2020/dreamify" class="clickable" target="_blank">dreamify</a>
        <br />
        an AI-powered vision board generator 🪩
      </p>
      <p>
        <a href="https://github.com/kdo1027/CareMeal" class="clickable" target="_blank">caremeal</a>
        <br />
        a precision nutrition management web app 🥗
      </p>
      <br />
      
    </div>
  );
}

export default Projects;