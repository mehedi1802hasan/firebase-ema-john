import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/Provider';
import { Result } from 'postcss';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
    const {loginUser}=useContext(AuthContext)
    const [show,setShow]=useState(false)
    const location=useLocation()
    console.log(location)
    const from=location.state?. from?. pathname || '/'
    const navigate=useNavigate()
    const handleSubmit=(event)=>{
        event.preventDefault()
       
     const form=event.target;
     const email=form.email.value;
     const password=form.password.value;
     console.log(email,password)
     loginUser(email,password)
     .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser);
     navigate(from,{replace:true})
     })
     .catch(error=>{
        console.log(error.message)
     })
    }
    return (
        <div>
           <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>

    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={show ? "text" : "password"}  name='password' placeholder="password" className="input input-bordered" required/>
          <p onClick={()=>setShow(!show)}>
            <small>
              {
                show ? <span>Hide Password</span> : <span>Show Password</span>
              }
            </small>
          </p>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Login</button>
        </div>
        <h6>Are you New in Ema-John?  
             <Link className='text-blue-500' to='/registration'> SingUp </Link></h6>
      </form>
    </div>
  </div>
</div>
     
        </div>
    );
};

export default Login;