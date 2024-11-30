import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Result } from "postcss";

const SignIn = () => {

    const {signInUser} = useContext(AuthContext)

    const handleSignIn = e => {
        e.preventDefault()


        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            console.log(result.user);

            // update last login time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime
            const loginInfo = { email, lastSignInTime}

            fetch(`http://localhost:5000/users/`, {
                method: 'PATCH',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data =>{
                console.log('sign in info update in db', data);
            })


        })
        .catch(error=>{
            console.log(error);
        })

    }




  return (
    <div>

      <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg my-40">

        <form onSubmit={handleSignIn} className="space-y-4">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Login
          </h2>

          <div>
            <label
              for="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              for="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
