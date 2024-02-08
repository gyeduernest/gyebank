import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Transaction from "./pages/Transaction"
import Bills from "./pages/Bills"
import Account from "./pages/Account"
import Extras from "./pages/Extras"
import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import { UserProvider } from '../src/ContextApi/UserContext.jsx';
import { Startpage } from "./pages/Startpage.jsx"
import SendMoney from "./Components/SendMoney.jsx"
import { GlobalProvider } from "./ContextApi/GlobalState.jsx"





function App() {


  return (
    <>
    <div className="bg-slate-50 text-black">
            <UserProvider>
              <GlobalProvider>
                <BrowserRouter>
                    <Routes>
                          <Route path="/" element={<Signup/>}/>
                          <Route path="/startpage" element={<Startpage/>}/>
                          <Route path="/login" element={<Login/>}/>
                          <Route path="/dashboard" element={<Dashboard/>}/>
                          <Route path="/transaction" element={<Transaction/>}/>
                          <Route path="/extras" element={<Extras/>}/>
                          <Route path="/bills" element={<Bills/>}/>
                          <Route path="/account" element={<Account/>}/>
                          <Route path="/sendmoney" element={<SendMoney/>}/>
                    </Routes>
                  </BrowserRouter> 
              </GlobalProvider>
          </UserProvider>  
      
      

     </div>
      

    </>
  )
}

export default App
