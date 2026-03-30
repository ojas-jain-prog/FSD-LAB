import { useState } from "react";

function Header() {
  const [clicked, setClicked] = useState(false);

  return (
    <header>
      <h1>Ojas Jain</h1>
      <p>Computer Engineering Student | Developer</p>

      <button onClick={() => setClicked(!clicked)}>
        {clicked ? "Welcome 👋" : "Click Me"}
      </button>
    </header>
  );
}

export default Header;