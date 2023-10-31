import React from "react";

const TransactionCard = (props) => {
  console.log(props.transaction)
  return (
    <div className="transaction-card">
      <p><b>username: </b>{props.transaction.username}</p>
      <p><b>timestamp: </b>{props.transaction.timestamp}</p>
      <p><b>amount: </b>{props.transaction.amount}</p>
      <p><b>price: </b>{props.transaction.price}</p>
      <br></br>
    </div>
  )
}

const Transactions = () => {
  const transactions_example = [
    {
      username: "user1",
      timestamp: "2021-01-01T00:00:00.000Z",
      amount: 100,
      price: 0.1,
    },
    {
      username: "user2",
      timestamp: "2021-01-01T00:00:00.000Z",
      amount: 50,
      price: 0.1,
    },
    {
      username: "user3",
      timestamp: "2021-01-01T00:00:00.000Z",
      amount: 25,
      price: 0.1,
    },
    {
      username: "user4",
      timestamp: "2021-01-01T00:00:00.000Z",
      amount: 12.5,
      price: 0.1,
    },
    {
      username: "user5",
      timestamp: "2021-01-01T00:00:00.000Z",
      amount: 6.25,
      price: 0.1,
    },
    {
      username: "user6",
      timestamp: "2021-01-01T00:00:00.000Z",
      amount: 3.125,
      price: 0.1,
    },
    {
      username: "user7",
      timestamp: "2021-01-01T00:00:00.000Z",
      amount: 1.5625,
      price: 0.1,
    }
  ]

  return (
    <>
      <h1>Transactions</h1>
      {transactions_example.map((transaction, index) => (
        <TransactionCard key={index} transaction={transaction} />
      ))
      }
    </>
  )
}

export default Transactions;
