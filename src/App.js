import './App.css';
import Contacts from './Sections/Contacts';
import Hero from './Sections/Hero';
import Projects from './Sections/Projects';
import Hobbies from './Sections/Hobbies';
import Selector from './Sections/Selector.js';
function App() {
  return (
    <div className="App">
    <Selector/>
     <Hero/>
     <Hobbies/>
     <Projects/>
     <Contacts/> 
    </div>
  );
}

export default App;
