import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import './App.css';
import AddTransaction from './components/AddTransaction';
import { GloabalProvider } from './context/Globalstate';

function App() {

  return (

    <GloabalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GloabalProvider>
  );
}



export default App;