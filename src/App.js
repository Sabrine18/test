import React,{ useState } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import { v4 as uuidv4 } from 'uuid';


const initialExpense = [
  {id:uuidv4(),charge:"rent", amount:1600},
  {id:uuidv4(),charge:"car payment", amount:400},
  {id:uuidv4(),charge:"credit card bill ",amount:1200}
]


function App() {
  console.log(useState())
  const [expense,setExpense] = useState(initialExpense)
  console.log(expense,setExpense ) 
  return (
    <>
      <Alert />
      <h1>budget calculator </h1>
      <main className='App'>
      <ExpenseForm />
      <ExpenseList expense={expense}/>
      </main>
      <h1>
        total spending : <span className='total'>
          
          { expense.reduce((acc,curr)=> {
            return (acc+=curr.amount)
          },0)}D
        </span>
      </h1>
      
          </>
  );
}

export default App;
