import ExpenseItem from "./ExpenseItem.jsx";
import './expense.css';

function Expenses(props) {
    return (
        <div className="expenses">
            <ExpenseItem data={props.dataMain[0]} />
            <ExpenseItem data={props.dataMain[1]} />
        </div>
    );
}

export default Expenses;