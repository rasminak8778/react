import logo from './logo.svg';
import './App.css';
import Header from './component/header/header.jsx';
import { Footer } from './component/footer.jsx';
import reactImg from './assets/react.png';
import { CORE_COCEPTS } from './data.js';
import TabButton from './component/TabButton.jsx';
//import a default component(header)
//import a named component(footer)
//component two types bulid in(start with lowercaseletter,rentered by dom) and cutsom(uppercase,react traverse).
//outputting dynamic values reactDescriptions
//or simply intialise and use it(eg:description) 
//dynamically loading image
//props:case 1(making component reusable)pass data to one components to another component via concept props[coreconceptprops],the data passed to component App by using props.
//props:case2;by using a data.js file(all data stored) and import into this file [CORE_COCEPTS]making mode easy to pass data
//props:case3;by using spread operator simply write the code
//props:case5;<Button caption="My Button" /> export default function Button({ caption, type = "submit" }) { 
  // caption has no default value, type has a default value of "submit"}
//children props(<button>{label}</button>) vs attr props(label):
//onClick in button[Tabbutton.jsx].





const reactDescriptions =['First','Second','Third'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

function CoreConceptProps({name,description,age,place}){
  
  return(
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{age}</p>
      <p>{place}</p>
    </li>
  );
};

function App(){
  function handleSelect() {
    console.log('Hello World!!!');
  };
  const description = reactDescriptions[genRandomInt(1)];
  return(
    <div>
      <img src={reactImg} alt="Stylized atom"/>
       <Header/>
       <main>
        <section id="core-concepts">
          <h2>Time to get Started...</h2>
          <ul>
            <CoreConceptProps name="Rasmina K" description="Nice to meet you" age="23" place="Kakkanchery"/>
            <CoreConceptProps name={CORE_COCEPTS[0].name}
             description={CORE_COCEPTS[0].description}
             age={CORE_COCEPTS[0].age}
             place={CORE_COCEPTS[0].place}/>
             <CoreConceptProps name={CORE_COCEPTS[1].name}
             description={CORE_COCEPTS[1].description}
             age={CORE_COCEPTS[1].age}
             place={CORE_COCEPTS[1].place}/>
            <CoreConceptProps {...CoreConceptProps[1]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
              <TabButton onSelect={handleSelect}>JSX</TabButton>
              <TabButton onSelect={handleSelect}>Props</TabButton>
              <TabButton onSelect={handleSelect}>State</TabButton>
            </menu>
            Dynamic Content

        </section>
        
        <p>
          {description} Dynamic values generated 
        </p>
       </main>
       <Footer/>
       
    </div>
  
  )
};
export default App;