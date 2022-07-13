class Transaction {
  constructor(amount, accountId) {
    this.amount = amount;
    this.accountId = accountId;
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
  constructor(accountIdFrom, accountIdTo, amount, accountId) {
    super(amount, accountId);
    this.accountIdForm = accountIdFrom;
    this.accountIdTo = accountIdTo
  }
}

//Transaction table
// will be in event listener for trans button after nicolo finishes
$.ajax({
  method: 'get',
  url: 'http://localhost:3000/transactions',
  dataType: 'json',
}).done((data) => {
  console.log('data get transactions ajax', data);
  
  $.each(data, (i, transaction) => {
    const trans = new Transaction(transaction.value);
    console.log('testingtrns', trans)
    $("#transaction_list").append(`
    <tr>
      <td>${trans.accountId}</td>
      <td>${trans.userName}</td>
      <td>${trans.type}</td>
      <td>${trans.category}</td>
      <td>${trans.description}</td>
      <td>${trans.transactionAmount}</td>
      <td>${trans.accountIdFrom}</td>
      <td>${trans.accountIdTo}</td>
    </tr>
    `)
    console.log('testingtrns', trans)
  })
  
})
