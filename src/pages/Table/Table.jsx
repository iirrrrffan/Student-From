import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Table = () => {
    const [user,setUser] = useState([])
    const [users,setUsers] = useState([])
    const [search, setSearch] = useState('');
    const navi = useNavigate()


    
    useEffect(()=>{
        const fetchData = async ()=>{
          try {
            const res = await axios.get("http://localhost:4001/user/get")
            setUser(res.data.data)
            console.log(res);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData()
      },[])


      useEffect(()=>{
        const storedUser = window.localStorage.getItem("user")
        if(storedUser){
         navi("/table")
        }else{
         navi("/login")
        }
       },[])

       const handleLogout = () => {
        localStorage.removeItem('user');
        navi('/login');
      };

  return (
    <div>
        <div>
            <div className='nav'> 
            <input type="search" placeholder='search'  />
            <input type="search" placeholder='university'  />
            <input type="search" placeholder='subject'  />
            </div>
<div>
    {user?.map((dt)=>(

  
<table className='table'>
<tr>
<th>Name</th>
<td>{dt?.name}</td>
<th>Subjuct</th>
<td>{dt?.subject}</td>
<th>University</th>
<td>{dt?.university}</td>
<th>Phone</th>
<td>{dt?.phone}</td>
<th>Email</th>
<td>{dt?.email}</td>
</tr>
<br/>
<tr>





</tr>

</table>
  ))}
</div>

<button onClick={handleLogout} >back</button>

        </div>
    </div>
  )
}

export default Table