import { useLocation,useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/register.css'

const Registercontent = ()=>{
    const location = useLocation();
    console.log(location.pathname);
    const [firstname, getFirstname] = useState('')
    const [lastname, getLastname] = useState('')
    const [phone, getPhone] = useState('')
    const [email, getEmail] = useState('')
    const [password, getPassword] = useState('')
    const [formerror, getFormerror] = useState('')
    const [formName, getFormname] = useState('Registration Form');
    const [buttonName, Buttonname] = useState('Registration')
    const [formLogin, getFormlogin] = useState('Already have account')
    const params = useParams();
    console.log(params.id)
    useEffect(()=>{
        if(params.id){
            getFormname('Update Form')
            Buttonname('Update')
            axios.get('http://localhost:8080/users/singleuserlist/'+params.id).then((response)=>{
                getFirstname(response.data.message[0].firstname)
                getLastname(response.data.message[0].lastname) 
                getPhone(response.data.message[0].phone) 
                getEmail(response.data.message[0].email) 
                getPassword(response.data.message[0].password)  
        })
        }
        if (location.pathname === '/Loginpage'){
            getFormname('Login Form')
            Buttonname('Login')
            getFormlogin('Create new account')
        }    
    },[])

    const handlefirstname = (event)=>{
        getFirstname(event.target.value);
    }
    
    const handlelastname = (event)=>{
        getLastname(event.target.value);
    }

    const handlephone = (event)=>{
        getPhone(event.target.value);
    }

    const handleemail = (event)=>{
        getEmail(event.target.value);
    }

    const handlepassword = (event)=>{
        getPassword(event.target.value);
    }

    const handlesubmit = (event)=>{
        event.preventDefault();
        console.log(firstname,lastname,phone,email,password)
        if(firstname == ''){
            getFormerror("Please enter you First name")
        }
        else if(lastname == ''){
            getFormerror("Please enter you Last name")
        }
        else if(phone == ''){
            getFormerror("Please enter you Phone number")
        }
        else if(email == ''){
            getFormerror("Please enter you Email")
        }
        else if(password == ''){
            getFormerror("Please enter you Password")
        }
        else{
            getFormerror('')
            let formdata = {firstname:firstname,lastname:lastname,phone:phone,email:email,password:password}
            axios.post('http://localhost:8080/users/registration',formdata).then((response)=>{
                console.log(response)
                getFormerror('User created successfully')
            })
        }
    }

    return(
        <>
        <section class="fo">
        
        <div class='header-form'>{formName}</div>
        <div class='formerr'>{formerror}</div>
        <form class='main-form'>
    
    { buttonName != 'Login'  && 
            <>
            <label for='firstname'>First Name </label>
            <input type="text" name="fname" placeholder="First Name " value={firstname} onChange={handlefirstname}/><br />
            <label for='lastname'>Last Name </label>
            <input type="text" name="lname" placeholder="Last Name " value={lastname} onChange={handlelastname}/><br />
            <label for='phone'>Phone </label>
            <input type="tel" name="phone" placeholder="Phone"pattern="[0-9]{10}" maxlength="10" value={phone} onChange={handlephone}/><br />

            </>
        }
            <label for='email'>Email </label>
            <input type="email" name="email" placeholder="Email " value={email} onChange={handleemail}/><br />
            <label for='password'>Password </label>
            <input type="password" name="pwd" placeholder="Password " value={password} onChange={handlepassword}/><br />
            <input id='but' type='submit' value={buttonName} onClick={handlesubmit}/>

            <div class='new'>
                <a href="/Registrationpage">{formLogin}</a>
            </div>
           
            
        </form>
      
        </section>
        </>
    )
}
export default Registercontent