import './Header.css' ;

import { Link } from 'react-router-dom';

const Header = () =>{

    return(
    
    
    
    <div className="header-base'> 
    <ul className="header-menu">
    
    
    
    
    
    <li>
    <Link to="/"><i class="fa-solid fa-house"></i> Home</Link>
    </li> 
    <li><Link><i class="fa-solid fa-circle-info"></i> About Us</Link>
    </li> 
    <li><Link to="/login"><i class="fa-solid fa-user-lock"></i> Login</Link>
    </li> 
    <li><Link><i class="fa-solid fa-plus"></i> Register</Link>
    </li> I
    
   </ul>
    
    </div>


export default Header;

    