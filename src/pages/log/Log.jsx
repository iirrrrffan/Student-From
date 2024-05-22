import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Log = () => {

const navi = useNavigate()
const Emailref = useRef(null)
const phoneref = useRef(null)
const [error, setError] = useState(null);

const handleLogin = async(e)=>{
  e.preventDefault();
  const inputEmail=Emailref.current.value;
  const inputPhone=phoneref.current.value;

  if (!inputEmail || !inputPhone) {
    setError("Please fill out all fields.");
    return;
  }

  try{
    const data={
      email:inputEmail,
      phone:inputPhone
    }

    const response = await axios.post('http://localhost:4001/user/login',data)
      console.log(response)
      if(response.status===201){
        localStorage.setItem("user",JSON.stringify(response.data))
        navi('/table')
      }
      
    }catch(error){
      console.log(error,"login error");
    }
  }

  return (
    <div>
      <div>
        <input type="email" placeholder='email' ref={Emailref} />
        <input type="phone" placeholder='phone' ref={phoneref} />
      </div>
      <div>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default Log