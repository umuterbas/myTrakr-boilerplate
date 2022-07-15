// import { getUsernameById } from "./Account.js";

class Transaction {
  constructor(transaction) {
    this.id = transaction.id,
      this.accountId = transaction.accountId;
    this.accountIdFrom = transaction.accountIdFrom;
    this.accountIdTo = transaction.accountIdTo;
    this.amount = transaction.amnt;
    this.category = transaction.category;
    this.transact = transaction.transact;
    this.type = transaction.type;
  }
  commit() {
    if (this.value < 0 && this.amount > this.account.balance) return;
    this.account.transactions.push(this.value);
    // this.account.balance += this.value;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

class Transfer extends Transaction {
  // constructor(accountIdFrom, accountIdTo, amount, accountId) {
  //   super(amount, accountId);
  //   this.accountIdForm = accountIdFrom;
  //   this.accountIdTo = accountIdTo
  // }
  get value() {
    //
    //return this.amount;
  }
}

export const convertTransactions = function (transactions) {
  return transactions.map(transaction => {
    // console.log('transaction convert', transaction)
    if (transaction.type === 'deposit') {
      return new Deposit(transaction);
    }
    if (transaction.type === 'withdraw') {
      return new Withdrawal(transaction);
    }
    if (transaction.type === 'transfer') {
      return new Transfer(transaction);
    }
  })
}

//Transaction table
// will be in event listener for trans button after nicolo finishes
// $.ajax({
//   method: 'get',
//   url: 'http://localhost:3000/transactions',
//   dataType: 'json',
// }).done((data) => {
//   console.log('data get transactions ajax', data);
//   data.forEach(accTransactions => {
//     const newTransactions = convertTransactions(accTransactions);
//     $.each(newTransactions, (i, transaction) => {
//       // console.log('testingtrns', transaction)
//       // console.log('i', i)
//       const username = getUsernameById(transaction.accountId);

//       $("#transaction_list").append(`
//       <tr>
//         <td>${transaction.accountId}</td>
//         <td>${username}</td>
//         <td>${transaction.type}</td>
//         <td>${transaction.category}</td>
//         <td>${transaction.description}</td>
//         <td>${transaction.amount}</td>
//         <td>${transaction.accountIdFrom}</td>
//         <td>${transaction.accountIdTo}</td>
//       </tr>
//       `)
//       console.log('testingtrns', transaction)
//     })
//   });

// })
