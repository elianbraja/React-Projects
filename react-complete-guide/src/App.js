import {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: "Course Payment",
        amount: 70.40,
        date: new Date(2020, 7, 14)
    },
    {
        id: 'e2',
        title: "Car Insurance",
        amount: 94.12,
        date: new Date(2022, 2, 28)
    },
    {
        id: 'e3',
        title: "New TV",
        amount: 150.20,
        date: new Date(2020, 5, 11)
    },
    {
        id: 'e4',
        title: "Other bills",
        amount: 200.00,
        date: new Date(2020, 7, 19)
    }
]
const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = expense => {
        setExpenses(previousExpenses => {
            return [expense, ...previousExpenses]
        })
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
