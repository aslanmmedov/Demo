import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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

    </>
  )
}

export default App
