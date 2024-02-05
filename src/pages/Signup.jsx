import { useContext, useState } from "react";
import { LoadButton } from "../Components/ButtonLoad";
import { auth } from "../../firbaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../ContextApi/UserContext";



export  function Signup (){
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate();
const [errorState, setErrorState] = useState("");
const { updateUser } = useContext(UserContext);


const createAccount = async (e) => {
  e.preventDefault();

   if (!email || !password) {
    console.error('Please provide both email and password.');
    setErrorState('Please recheck and input email and password.');
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    // const user = userCredential.user;

    navigate('/startpage');
  } catch (error) {
    console.error('Authentication Error:', error);
  }
  updateUser(username)

};




return (
  <>
    <div className="py-32 flex justify-center ">
      <form className="lg:w-[400px] w-80 border bg-white border-slate-300 rounded-md shadow-md">
        <div>
          <h1 className="text-black">
            Signup
          </h1>


          <p className="w-56 py-5 text-black">
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

    {errorState && (
          <div className="text-red-600 text-end mt-2 mb-3 rounded-md px-3  py-2 text-xs font-semibold bg-red-100">
            {errorState}
          </div>
    )}
        <div>
          <button className="w-full "    onClick={createAccount} >
            <LoadButton text="Create Account"  />
          </button>
          
        </div>

        <div className="p-3">
          <Link to="/login" className="">
            Already Have an Account? <span className="text-blue-500 font-extrabold">Login</span>
          </Link> 
        </div>
        
      </form>
    </div>
  </>
);

}
 
