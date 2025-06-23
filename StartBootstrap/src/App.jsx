import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='phone'> <div className='container'>
        <div className='all'>
          <div className='par'>
            <h2>Showcase your app beautifully.</h2> <p>Launch your mobile app landing page faster with this free, open source theme from Start Bootstrap!</p>
            <div className='plays'>
              <img src="https://startbootstrap.github.io/startbootstrap-new-age/assets/img/google-play-badge.svg" alt="" /> <img src='https://startbootstrap.github.io/startbootstrap-new-age/assets/img/app-store-badge.svg' />
            </div>
          </div>
          <img src='https://www.freeiconspng.com/uploads/apple-iphone-x-pictures-5.png' />
        </div>
      </div>
      </section>
    </>
  )
}

export default App
