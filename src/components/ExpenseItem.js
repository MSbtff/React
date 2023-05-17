import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>23/ 5/ 18</div>
      <div className="expense-item__description">
        <h2>car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
