import '../css/header.css'

import {useNavigate} from 'react-router-dom'
const Header = ()=>{
    const navigate = useNavigate();
    return(
        <>
        <div id="header">
           <nav class="navbar">
            <ul class="nav-links">

                <li><a onClick={()=>{navigate('/')}}>Home</a></li>
                <li><a onClick={()=>{navigate('/Registrationpage')}}>Registration</a></li>
                <li><a onClick={()=>{navigate('/Loginpage')}}>Login</a></li>
                <li><a onClick={()=>{navigate('/ContactUspage')}}>Contact Us</a></li>
                <li><a onClick={()=>{navigate('/userlist')}}>User List</a></li>
            </ul>
          </nav>
          
        </div>

        </>
    )
}
export default Header