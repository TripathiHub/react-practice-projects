import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
export default function CoreConcepts() {
    return (
        <>
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
                    <CoreConcept {...CORE_CONCEPTS[3]}/> 
                    Also by using map funtion of array we can output list content dynamacially accorfing to
                    original content array i.e if original content changes it will also change content on UI'
                    without breaking styling due to using map as it operate to every sigle element individaully*/}
                    {CORE_CONCEPTS.map((contentItem)=> <CoreConcept key={contentItem.title} {...contentItem}/>)}
                   </ul>
                </section>
        </>
    );
}