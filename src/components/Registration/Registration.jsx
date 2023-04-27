import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/Provider';

const Registration = () => {
    const {signUp}=useContext(AuthContext)
    const handleSubmit=(event)=>{
        event.preventDefault()
       
     const form=event.target;
     const email=form.email.value;
     const password=form.password.value;
     const confirmPassword=form.confirmPassword.value;
     console.log(email,password,confirmPassword)
     signUp(email,password)
     .then(result=>{
      const singgedUser=result.user;
      console.log(singgedUser)
     })
     .catch(error=>{
        console.log(error.message)
     })

    }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please Registration !!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name='confirmPassword' placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
        </div>
        <h6>Have you already account? <Link className='text-blue-500' to='/login'>Login</Link></h6>
      </form>
    </div>
  </div>
</div>
     
        </div>
    );
};

export default Registration;