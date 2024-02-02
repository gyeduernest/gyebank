import { useState } from "react";

export default function TransactionMenu() {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive(!isActive);
  };

  const textColor = isActive ? 'white' : 'black';
  const backgroundColor = isActive ? 'blue' : '#d4d4d4';
  



  return (



    <div>
          <li className="menu text-xs Dashboard  font-bold  mb-5  rounded-box {`Transaction ${isActive ?'active' : ''}`}
      " style={{ color: textColor, 
        backgroundColor: backgroundColor }}
      onClick={handleOnClick}>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Transaction
              </a>
            </li>
    </div>
  )
}
