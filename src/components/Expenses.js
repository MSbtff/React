import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function expenses(props) {
  return (
    <div>
      <ExpenseItem
        title={props.item[0].title}
        amout={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExpenseItem
        title={props.item[1].title}
        amout={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        amout={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExpenseItem
        title={props.item[3].title}
        amout={props.item[3].amount}
        date={props.item[3].date}
      />
    </div>
  );
}

export default expenses;
