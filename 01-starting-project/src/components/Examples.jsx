import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import { useState } from "react";
import Section from "./Section";

export default function Examples(){
     let dynamicSelected = "";
      const [selectedContent,setSelectedContent] = useState(false);
      function handleClick(selectedButton){
        setSelectedContent(selectedButton);
      }
      if(!selectedContent){
        dynamicSelected="PLEASE select to get further details"
      }   
    return(
        <>
        <Section id='examples' title="Examples">
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
                </Section>
        </>
    );
}