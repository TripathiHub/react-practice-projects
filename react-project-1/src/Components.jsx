  
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
const headerContent = ["Getting Start","Lets Start","Get Started"];
   function setRandomNumber(max){
    return Math.floor(Math.random()*(max+1));
   }
export default function Header(){
    let dynamicContent = headerContent[setRandomNumber(headerContent.length-1)];
    return (
     <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>{dynamicContent}</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      )
 }
 