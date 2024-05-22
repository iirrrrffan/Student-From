import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MultiSelect } from "react-multi-select-component";
import "./reg.css"
import axios from 'axios';
import Stars from '../../components/stars/Stars';

const Reg = () => {
  const [rating, setRating] = useState(0)
  const [selected, setSelected] = useState([]);
  const navi = useNavigate();
  const [error, setError] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const subjectRef = useRef(null);  
  const universityRef = useRef(null);

  const handleSubmit = async () => {
    const inputName = nameRef.current.value.trim();
    const inputSubject = subjectRef.current.value.trim();
    const inputUniversity = universityRef.current.value.trim();
    const inputemail = emailRef.current.value.trim();
    const inputphone = phoneRef.current.value.trim();
  
    if (!inputName || !inputSubject || !inputUniversity || !inputemail || !inputphone) {
      setError("Please fill out the form");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:4001/user/create", {
        name: inputName,
        subject: inputSubject,
        university: inputUniversity,
        phone: inputphone,
        email: inputemail
      });
      console.log(response);
      if(response.status === 201){
        navi("/login")
      }
  } catch (error) {
    console.log(error);
  }

  }

  const options = [
    { label: "BA.Sociology", value: "BA.Sociology" },
    { label: "B.Com", value: "B.Com" },
    { label: "BA.English", value: "BA.English"},
    { label: "BA.Economics", value: "BA.Economics"},
    { label: "BA.Hindi", value: "BA.Hindi"},
    { label: "BA.Arabic", value: "BA.Arabic"},
    { label: "BSC", value: "BSC"},
  ];


  return (
    <div>
       <div className="reg">
          <form className="form">
            <input placeholder='name' type='text' ref={nameRef}/>
            <input type="email"  placeholder='email' ref={emailRef}/>
            <input type="phone"  placeholder='Phone' ref={phoneRef}/>
            <input type="text"  placeholder='University' ref={universityRef}/>
            <input type="text"  placeholder='subject' ref={subjectRef}/>
            <MultiSelect
            className='drop'
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        
      />

          </form>
          <div>
          <input type='date'/>
           <Stars rating={rating} setRating={setRating}/>
          </div>

          <button onClick={handleSubmit}>Sign Up</button>
        <Link to={"/login"}>
          <button>log in</button>
          </Link>
        </div>
    </div>
  )
}

export default Reg