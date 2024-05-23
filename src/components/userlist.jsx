import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Userlist = ()=>{
    const [userData, getuserData] = useState('');
    const navigate = useNavigate();
    
    const useralllist = ()=>{
        axios.get('http://localhost:8080/users/userlist').then((response)=>{
            getuserData(response.data.message)
            
        })
    }   
    const deleteHandler =(id)=>{
        axios.delete('http://localhost:8080/users/deleteuser/'+id).then((response)=>{
            // getuserData(response.data.message)
            useralllist();
        })
    }
   useEffect(()=>{
    useralllist();
   },[])
    
    return(
        <>
            <table border="1" width="1000">
                <tr>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                { userData && userData.map((users)=>(
                    <tr>
                        <td>  {users.users_id}  </td>
                        <td>  {users.firstname}  </td>
                        <td>  {users.lastname}  </td>
                        <td>  {users.phone}  </td>
                        <td>  {users.email}  </td>
                        <td><input type="button"  value="Delete" onClick={()=>{deleteHandler(users.users_id)}}/>
                            <input type="button"  value="Edit" onClick={()=>{navigate('/edit/'+users.users_id)}}/>
                        </td>
                    </tr>
                ))}
                
            </table>
        </>
    )
}
export default Userlist;