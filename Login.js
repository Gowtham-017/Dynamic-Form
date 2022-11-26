import React,{useState} from 'react'
import './Login.css'

function Hello(){
  
    const[Name,setName]=useState("");
    const[Email,setEmail]=useState("");
    const[Password,setPassword]=useState("");
    const[error,setError]=useState(false);
         

    const handleChange=(e)=>
    {
      e.preventDefault()
      if(Name.length===0 || Email.length===0 || Password.length===0)
      {
        setError(true)
      }
       console.log(Name,Email,Number);
    }
    return (
        <div className='container'>
      <form  onSubmit={handleChange} >

        <h3>Enter your username</h3><br />
       <input type="text"  className='box' onChange={e=>setName(e.target.value)} ></input><br />

       <div className='label'>
        {error && Name.length===0 ? <label>Please enter your name</label> : ""}</div><br />


       <h3>Enter your email</h3><br />
       <input type="email" className='box' onChange={e=>setEmail(e.target.value)} ></input>    


       <div className='label'>
       {error && Email.length===0 ? <label>Please enter your Email</label> : ""}</div>
       <br />

       <h3>Enter your password</h3><br />
       <input  type="password" className='box'  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  ></input>

       <div className='label'>
        
       {error && Password.length===0 ? <label>Please enter your Password</label> : ""}</div>
       
       <br /><br />
       
      <br />
      {/* <div className='hide1'>`</div><div className='hide'> */}
       <button type='submit' className='button' onClick="">Submit</button>
        {/* </div><br /><br/> */}
        
        </form>
         </div>
    )
    }
export default Hello