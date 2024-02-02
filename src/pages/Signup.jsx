import { useState } from "react";
import { LoadButton } from "../Components/ButtonLoad";
import { SearchIcon } from "@heroicons/react/solid";
import { TextInput } from "@tremor/react";



export  function Signup (){
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const createAccount = (e) => {

}




return (
  <>
    <div className="py-10 flex justify-center ">
      <form className="lg:w-[400px] border bg-white border-slate-300 rounded-md shadow-md">
        <div>
          <h1>
            Signup
          </h1>
          <p className="w-56 py-5">
            Create an account by filling the information below
          </p>
        </div>

        <div className="rounded-md">
        <label htmlFor="username">
          Username
          <br />
            <input type="text" 
            className="rounded-md mb-5"
            id="username"
             required 
             value={username}
             onChange={(e)  => setUsername(e.target.value)} />
        </label>
        </div>

        <div>
        <label htmlFor="email">
          Email Address
          <br />
          <input type="email" id="email" 
                      className="rounded-md mb-5"
          required
          value={email}
             onChange={(e)  => setEmail(e.target.value)}  />
        </label>
        </div>
        <div>
        <label htmlFor="password">
          Password
          <br />
          <input type="password" id="password" required  
                      className="rounded-md mb-5"
          value={password}
             onChange={(e)  => setPassword(e.target.value)} />
        </label>
        </div>

        <div>
          
            <LoadButton text="Create Account" />
        </div>

             
        
      </form>
    </div>
  </>
);

}
 
