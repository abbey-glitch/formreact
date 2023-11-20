import { Component } from "react";
import { useState, useEffect } from "react";
import { validEmail, validPassword } from "./regex";
const Profile = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailerr, setEmailerr] = useState(false)
    const [passworderr, setPasserr] = useState(false)
    const [msgsuccess, message] = useState(false)
    const validateInput = (e)=>{
        if(!validEmail.test(email)){
            setEmailerr(true)
        }
        if(validEmail.test(email)){
            message(true)
        }
        if(!validPassword.test(password)){
            setPasserr(true)
        }
        if(validEmail.test(password)){
            message(true)
        }
    }
    const submit = (e)=>{
        e.preventDefault()
        console.log('you entered '+ {email})
    }
    return ( <>
               <div className="bg-dark text-light container">
               <form onSubmit={submit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" 
                        className="form-label">
                        Email address
                    </label>
                    <input type="email" 
                         className="form-control" 
                         value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" 
                       className="form-text">
                        We'll never share your 
                        email with anyone else.
                    </div>
                    </div>
                  <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" 
                      className="form-label">Password</label>
                       <input type="password" 
                       value={password}
                       onChange={(e)=>setPassword(e.target.value)}
                       className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div class="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                      <label className="form-check-label" for="exampleCheck1">Check me out</label>
                   </div>
                   {msgsuccess && <div className="alert alert-success">
                     email and password is verified
                    </div>}
                   {emailerr && <p>the email you entered is invalid</p>}
                   {passworderr && <p>the password you entered is invalid</p>}
                   <button type="submit" onClick={validateInput} className="btn btn-primary">Submit</button>
                   
              </form>
               </div>
             
    </> );
}
 
export default Profile;