import { useState } from "react";
import "./assets/aslan.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <section id="header">
      <div className="container">


      <header>
        <div className="header">
          <h1>
            Start Bootstrap
          </h1>
          <nav>
            <a>Features</a>
            <a>Download</a>
            <div className="send">
                  <a >Send Feedback</a>
            </div>

          </nav>

        </div>
      </header>
            </div>
    </section>

      <section id="purple">
        <div className="purpleSec">
          <h2>
            "An intuitive solution to a common problem that we all face, wrapped
            up in a single app!"
          </h2>
          <h1>TNW</h1>
          <p>The next web</p>
        </div>
      </section>
    </>
  );
}

export default App;
