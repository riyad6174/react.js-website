

//importing icons from front awasome for react
import { FaReact } from 'react-icons/fa';
import { IoLanguageSharp } from "react-icons/io5";

//importing css 
import './nav.css';

//importing navlink from react-router-dom
import { Link , BrowserRouter as Router} from 'react-router-dom'



//functional component
const Navbar = () => {
    return (
      
        <Router>
            <div className='container'>
                <div className='navbar'>
                    <div className='logo'>
                        <FaReact className='reactlogo' />
                        <div className='items'>
                            <ul><li className='nav' ><Link to='/' className='reactlhomelink'>React</Link> </li></ul>
                        </div>

                    </div>
                    <nav className='items'>

                        <div className='nav'>
                            <ul>
                                <li><Link to='/docs' className='links'>Docs</Link> </li>
                                <li><Link to='/tutorial' className='links'>Tutorial</Link></li>
                                <li><Link to='/blog' className='links'>Blog</Link></li>
                                <li><Link to='/community' className='links'>Community</Link></li>

                            </ul>
                        </div>

                    </nav>
                    <div className='searchbar'>

                        <input type="search" placeholder="Search" />
                    </div>
                    <div className='items'>
                        <div className='nav'>
                            <ul>
                                <li><Link to='/version' className='links'>v17.02</Link> </li>
                                <li><Link to='/languages' className='links'><IoLanguageSharp className="langlogo" />Languages</Link></li>
                                <li><Link to='/github' className='links'>Github</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </Router>

    );
    
}



export default Navbar;