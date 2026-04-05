import Header from './components/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import  {EXAMPLES} from './data.js'
function App() {
  let dynamicSelected = "";
  const [selectedContent,setSelectedContent] = useState(false);
  function handleClick(selectedButton){
    setSelectedContent(selectedButton);
  }
  if(!selectedContent){
    dynamicSelected="PLEASE select to get further details"
  }
  return (
    <div>
       <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
           <ul>
           {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image} 
            this format will also work in all cases but if you have same key value of imput onject
            to props name then you can use spread opretor to optimize your code 
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
            {CORE_CONCEPTS.map((contentItem)=> <CoreConcept key={contentItem.title} {...contentItem}/>)}
           </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
           <TabButton 
           isSelected={selectedContent==="components"} 
           onClick={()=>handleClick("components")}>Components</TabButton>
           <TabButton 
           isSelected={selectedContent==="jsx"} 
           onClick={()=>handleClick("jsx")}>JSX</TabButton>
           <TabButton  
           isSelected={selectedContent==="props"} 
           onClick={()=>handleClick("props")}>Props</TabButton>
           <TabButton  
           isSelected={selectedContent==="state"} 
           onClick={()=>handleClick("state")}>State</TabButton>
           {/*label attribute can be also used here */}
          </menu>
          {dynamicSelected}
          { selectedContent &&
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedContent].title}</h3>
            <p>{EXAMPLES[selectedContent].description}</p>
            <pre>
              <code>
                 {EXAMPLES[selectedContent].code}
              </code>
            </pre>
          </div>
}
        </section>
      </main>
    </div>
  );
}

export default App;
