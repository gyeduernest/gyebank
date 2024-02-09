import { signOut } from "firebase/auth";
import { auth } from "../../firbaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PhoneSignout() {
const [shownotice, setShowNotice] = useState(false);
const navigate = useNavigate();
const [loading, setLoading] = useState(true);



const notice = <div className="alert alert-success">
                  <span>Message sent successfully.</span>
                </div>



  const Signout = async (e) => {
    e.preventDefault();
  
    setShowNotice(true)
  
    try {
      await auth.signOut();
      // const user = userCredential.user;
      
      navigate('/');
    } catch (error) {
      console.error('Authentication Error:', error);
    }
    
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(() => {
        setLoading(false); // Set loading to false once the authentication state is checked
      });
    
      return () => unsubscribe();
    }, []);

    if (loading) {
      return null; // or loading indicator
    }
  };






  return (
    <div>
      <button className="bg-red-500 rounded-md block sm:block md:block lg:hidden"
      onClick={signOut}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="block  sm:block md:block lg:hidden  w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
           </button>
        {shownotice && notice}
    </div>
  )
}
