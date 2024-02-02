import { useState } from "react";
import { LoadButton } from "../Components/ButtonLoad";
import { auth } from "../../firbaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";



export  function Login(){
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate();
const [errorState, setErrorState] = useState("");

const signIn = async (e) => {
  e.preventDefault();

   if (!email || !password) {
    console.error('Please provide both email and password.');
    setErrorState('Please recheck and input correct credentials.');
    return;
  }
  if ('auth/wrong-password'){
    setErrorState('Please check your Password')
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    // const user = userCredential.user;

    navigate('/dashboard');
  } catch (error) {
    console.error('Authentication Error:', error);
  }

};




return (
  <>
    <div className="py-32 flex justify-center ">
      <form className="lg:w-[400px] border bg-white border-slate-300 rounded-md shadow-md">
        <div>
          <h1>
            Login
          </h1>


          <p className="w-56 py-5">
            Input your email and Password to log into your account
          </p>
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

    {errorState && (
          <div className="text-red-600 text-end mt-2 mb-3 rounded-md px-3  py-2 text-xs font-semibold bg-red-100">
            {errorState}
          </div>
    )}
        <div>
          <button className="w-full "    onClick={signIn} >
            <LoadButton text="Create Account"  />
          </button>
          
        </div>
        <div className="p-3">
          <Link to="/" className="">
            Dont Have an Account? <span className="text-blue-500 font-extrabold">Signup</span>
          </Link> 
        </div>
             
        
      </form>
    </div>
  </>
);

}
 
