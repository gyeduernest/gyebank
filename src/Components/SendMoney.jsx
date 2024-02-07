import CurrentBalance from '../Charts/CurrentBalance'
import Expenses from '../Charts/Expenses'
import LastTransaction from '../Charts/LastTransaction'
import TransactionList from '../Charts/TransactionList'
import AddTransaction from '../Charts/AddTransaction'


export default function SendMoney() {



  return (
        <>
                       <div className='lg:flex justify-center py-10'>
                       <div className='lg:flex'>
                       <CurrentBalance/>
                        <Expenses/>
                        <LastTransaction/>
                       </div>
                        <TransactionList/>
                        <AddTransaction/>
                       </div>
        </>
      
      
  )
}
