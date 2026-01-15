import ExpenseItem from "./ExpenseItem.jsx";
import './expense.css';
import Card from './Card.jsx';

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem data={props.dataMain[0]} />
            <ExpenseItem data={props.dataMain[1]} />
        </Card>
    );
}

export default Expenses;