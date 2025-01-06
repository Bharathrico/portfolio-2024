import './Selector.css'

function Selector() {
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
            <button className='pill switzer' onClick={()=>scrollposition('home')}>Home</button>
            <button className='pill switzer' onClick={()=>scrollposition('hobbies')}>Hobbies</button>
            <button className='pill switzer' onClick={()=>scrollposition('projects')}>Projects</button>
            <button className='pill switzer' onClick={()=>scrollposition('contacts')}>Contacts</button>
        </div></div>);
}

export default Selector;