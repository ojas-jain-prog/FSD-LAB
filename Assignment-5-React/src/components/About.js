import { useState } from "react";

function About() {
  const [show, setShow] = useState(false);

  return (
    <section>
      <h2>About Me</h2>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Info" : "Show Info"}
      </button>

      {show && (
        <p>
          I am a Computer Engineering student passionate about web development,
          startups, and building impactful products.
        </p>
      )}
    </section>
  );
}

export default About;