import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/homepage';
import Registrationpage from './pages/registrationpage';
import ContactUspage from './pages/contactuspage';
import Loginpage from './pages/loginpage';
import Userlistpage from './pages/userlistpage';

function App() {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Registrationpage' element={<Registrationpage/>}/>
          <Route path='/Loginpage' element={<Loginpage/>}/>
          <Route path='/ContactUspage' element={<ContactUspage/>}/>
          <Route path='/userlist' element={<Userlistpage/>}/>
          <Route path='/edit/:id' element={<Registrationpage/>}/>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
