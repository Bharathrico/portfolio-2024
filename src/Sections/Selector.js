import './Selector.css'

const Selector = ({activeSection})=> {
    function scrollposition(slocation)
    {
        const element = document.getElementById(String(slocation));
        element?.scrollIntoView(
        {
            behavior: 'smooth'
        }
        )
    }
    return (  <div className='selector-wrap'><div className="selector">
            <button className={`pill switzer ${activeSection === "hero"? "pill-active":""}`} onClick={()=>scrollposition('hero')}>Home</button>
            <button className={`pill switzer ${activeSection === "hobbies"? "pill-active":""}`} onClick={()=>scrollposition('hobbies')}>Hobbies</button>
            <button className={`pill switzer ${activeSection === "projects"? "pill-active":""}`} onClick={()=>scrollposition('projects')}>Projects</button>
            <button className={`pill switzer ${activeSection === "contacts"? "pill-active":""}`} onClick={()=>scrollposition('contacts')}>Contacts</button>
        </div></div>);
}

export default Selector;