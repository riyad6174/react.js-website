

//importing icons from front awasome for react
import { FaReact } from 'react-icons/fa';
import { IoLanguageSharp } from "react-icons/io5";

//importing css 
import './nav.css';

//importing navlink from react-router-dom
import { NavLink } from 'react-router-dom'



//functional component
const Navbar = () => {
    return (
        <>
            <div className='container'>
                <div className='navbar'>
                    <div className='logo'>
                        <FaReact className='reactlogo' />
                        <div className='items'>
                            <ul><li className='nav' ><NavLink to='/' className='reactlhomelink'>React</NavLink> </li></ul>
                        </div>

                    </div>
                    <nav className='items'>

                        <div className='nav'>
                            <ul>
                                <li><NavLink to='/docs' className='links'>Docs</NavLink> </li>
                                <li><NavLink to='/tutorial' className='links'>Tutorial</NavLink></li>
                                <li><NavLink to='/blog' className='links'>Blog</NavLink></li>
                                <li><NavLink to='/community' className='links'>Community</NavLink></li>

                            </ul>
                        </div>

                    </nav>
                    <div className='searchbar'>

                        <input type="search" placeholder="Search" />
                    </div>
                    <div className='items'>
                        <div className='nav'>
                            <ul>
                                <li><NavLink to='/version' className='links'>v17.02</NavLink> </li>
                                <li><NavLink to='/languages' className='links'><IoLanguageSharp className="langlogo" />Languages</NavLink></li>
                                <li><NavLink to='/github' className='links'>Github</NavLink></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}



export default Navbar;