import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionLIst from './components/TransactionLIst';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >
     <Header title='Expense Tracker'/>
     <div className='container'>
       <Balance/>
       <IncomeExpenses/>
       <TransactionLIst/>
       <AddTransaction/>
     </div>
    </GlobalProvider>
  );
}

export default App;
