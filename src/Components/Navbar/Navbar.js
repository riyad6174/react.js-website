

//importing icons from front awasome for react
// import { FaReact } from 'react-icons/fa';
import { IoLanguageSharp } from "react-icons/io5";

//importing css 
import classes from './nav.module.css';

//importing navlink from react-router-dom
import { Link , BrowserRouter as Router} from 'react-router-dom'



//functional component
const Navbar = () => {
    return (
      
        <Router>
            <div className={classes.container}>
                <div className={classes.navbar}>
                    <div className={classes.logo}>
                        <img src="##" alt="dfsf" className={classes.reactlogo} />
                        <div className={classes.items}>
                            <ul><li className={classes.nav} ><Link to='/' className={classes.reactlhomelink}>React</Link> </li></ul>
                        </div>

                    </div>
                    <nav className={classes.items}>

                        <div className={classes.nav}>
                            <ul>
                                <li><Link to='/docs' className={classes.links}>Docs</Link> </li>
                                <li><Link to='/tutorial' className={classes.links}>Tutorial</Link></li>
                                <li><Link to='/blog' className={classes.links}>Blog</Link></li>
                                <li><Link to='/community' className={classes.links}>Community</Link></li>

                            </ul>
                        </div>

                    </nav>
                    <div className={classes.searchbar}>

                        <input type="search" placeholder="Search" />
                    </div>
                    <div className={classes.items}>
                        <div className={classes.nav}>
                            <ul>
                                <li><Link to='/version' className={classes.links}>v17.02</Link> </li>
                                <li><Link to='/languages' className={classes.links}><IoLanguageSharp className="langlogo" />Languages</Link></li>
                                <li><Link to='/github' className={classes.links}>Github</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </Router>

    );
    
}



export default Navbar;