import Header from './components/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
function App() {
  function handleClick(){
    console.log("Hello")
  }
  return (
    <div>
       <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
           <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            {/*title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image} 
            this format will also work in all cases but if you have same key value of imput onject
            to props name then you can use spread opretor to optimize your code */}
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
           </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
           <TabButton onClick={handleClick}>Components</TabButton>
           <TabButton onClick={handleClick}>JSX</TabButton>
           <TabButton onClick={handleClick}>Props</TabButton>
           <TabButton onClick={handleClick}>State</TabButton>
           {/*label attribute can be also used here */}
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
