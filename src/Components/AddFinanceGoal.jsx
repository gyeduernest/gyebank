import { useContext, useState } from "react";
import { GlobalContext } from "../ContextApi/GlobalState";







const AddFinanceGoal = () => {
  const [goalname, setGoalName] = useState("")
  const [description, setDescription] = useState("")
  const [rangeValue, setRangeValue] = useState(30);
  const {addGoal} = useContext(GlobalContext)
  
  const handleRangeChange = (e) => {
    setRangeValue(parseInt(e.target.value, 0));
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    
    const newGoal = {
      id:Math.floor(Math.random() * 1000000),
      goalname,
      description,
      rangeValue
    }

    addGoal(newGoal);
}



  return ( 

    <form action="" className="bg-white text-black" onSubmit={handleSubmit}  >
        <div >
        <input type="text" placeholder="Goal Name...." className="mb-3 input text-black input-bordered input-primary w-full "    value={goalname} onChange={(e) => setGoalName(e.target.value)}    />
        <br />
        <input type="text" placeholder="brief Description...."  className="text-black input input-bordered input-primary w-full mb-3 "      value={description}   onChange={(e) =>  setDescription(e.target.value)}   />
        <br />
        <h2>{rangeValue}%</h2>
        <input type="range" placeholder="brief Description...."  value={rangeValue} className=" input-bordered input-primary w-full mb-3 text-black" 
        min={0}  
        max={100}  
        step={1} 
        onChange={handleRangeChange}

        />
        </div>
        
       <button className="w-full btn btn-primary" >Add Goal</button>
   </form>

   );
}
 
export default AddFinanceGoal;