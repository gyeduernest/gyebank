import { signOut } from "firebase/auth";
import { auth } from "../../firbaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signout() {
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
      <button className="btn btn-md bg-red-600 text-white"    onClick={Signout}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
              Logout
      </button>
        {shownotice && notice}
    </div>
  )
}
