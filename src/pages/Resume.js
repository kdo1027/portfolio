import { useState, useEffect } from "react";

function Resume() {
  useEffect(() => {
    document.title = "my resume ⸜(｡ ˃ ᵕ ˂ )⸝♡";
  }, []);

  return (
    <div>
      <p>here's my resume (ง'̀-'́)ง</p>
      <br/>

      <iframe
        src="https://drive.google.com/file/d/1vHx5KvSkhz9KKzkOKa9g-dMzfkpWRNB5/preview"
        width="640"
        height="825"
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default Resume;