import './App.css';
import Contacts from './Sections/Contacts';
import Hero from './Sections/Hero';
import Projects from './Sections/Projects';
import Stack from './Sections/Stack';
function App() {
  return (
    <div className="App">
     <Hero/>
     <Projects/>
     <Stack/>
     <Contacts/> 
    </div>
  );
}

export default App;
