import './ExpenseItem.css';

//props 객체에서 키와 값으로 이루어진 파일 포맷을 얻는데
// 리액트에 의해 자동으로 전달됨
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
