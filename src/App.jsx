import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Transaction from "./pages/Transaction"
import Bills from "./pages/Bills"
import Account from "./pages/Account"
import Extras from "./pages/Extras"




function App() {


  return (
    <>
      <div className="dark:bg-slate-900 dark:text-slate-50 bg-slate-50 ">
         <BrowserRouter>
           
            <Routes>
                  <Route path="/dashboard" element={<Dashboard/>}/>
                  <Route path="/transaction" element={<Transaction/>}/>
                  <Route path="/extras" element={<Extras/>}/>
                  <Route path="/bills" element={<Bills/>}/>
                  <Route path="/account" element={<Account/>}/>
            </Routes>          
                    
          </BrowserRouter> 

      </div>
      

    </>
  )
}

export default App
