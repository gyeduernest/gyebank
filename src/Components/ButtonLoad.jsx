import { useState } from "react";
import Dashboard from "../assets/Dashboard.svg"
export const LoadButton = () => {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    // Toggle the loading state
    setLoading((prevLoading) => !prevLoading);

    // Simulate an asynchronous operation
    if (!loading) {
      setTimeout(() => {
        // Reset the loading state after the operation is complete
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <button className="btn btn-active bg-blue-600 text-white w-full" onClick={handleButtonClick} disabled={loading}>
      {loading ? (
        <>
          <span className="loading loading-spinner"></span> Loading
        </>
      ) : (
        <>
          <img src={Dashboard} alt="" />
          Get Account
        </>
      )}
    </button>
  );
};
