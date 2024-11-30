import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignup = e => {
        e.preventDefault();
        
        const email = e.target.email.value
        const name = e.target.name.value
        const password = e.target.password.value

        createUser( email, password)
        .then(result =>{
            console.log(result.user);
            const creationAt = result?.user?.metadata?.creationTime


            const newUser = {name, email,creationAt }
            fetch('http://localhost:5000/users',{
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(newUser)


            })
            .then(res => res.json())
            .then(data => {

              if(data.insertedId)
                console.log('user create in DB');
            })



        })
        .catch(error => {
            console.log('error', error);
        })
    }






  return (
    <div>
      <div className="hero bg-base-200  py-40">
        <div className="">
          <h1 className="text-3xl text-center font-bold mb-20">Sign Up</h1>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignup} className="card-body">


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>



              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
SignUp;
