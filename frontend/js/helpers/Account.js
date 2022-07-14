import { convertTransactions } from "./Transaction.js";

class Account {
  constructor(username, id, transactions = []) {
    this.username = username;
    this.transactions = transactions;
    this.id = id;
  }

  get balance() {
    return this.transactions.reduce((total, transaction) => {
      return total + transaction.value;
    }, 0);
  }
}


let accounts = {};
const updateAccount = function(transaction){
  //add transaction to transactions list
    // find account by transaction.accountId
    // push transaction to account.transactions
  //update summary
    // find span balance by account username
    // update text using account.balance
}
//
$.ajax({
  method: 'get',
  url: 'http://localhost:3000/accounts',
  dataType: 'json',
}).done((data) => {
  console.log('data get ajax', data);

  $.each(data, (i, account) => {
    const newTransactions = convertTransactions(account.transactions)
    const newAcc = new Account(account.username, account.id, newTransactions);
    accounts[newAcc.id] = newAcc;
    $("#selectuser").append(`<option value=${account.id}>${newAcc.username}</option>`)
    $("#from").append(`<option value=${account.id}>${newAcc.username}</option>`)
    $("#to").append(`<option value=${account.id}>${newAcc.username}</option>`)
    $("#account_summary").append(`<li>${newAcc.username}: ${newAcc.balance}$</li>`)
    console.log('testingacc', newAcc)
  });
  console.log('accs',accounts)
});

$("#add_new_account").on('click', (event) => {
  event.preventDefault()
  if ($('#new_account_input').val() !== "") {

    let accountName = new Account($('#new_account_input').val());
    // $("#selectuser").append(new Option ($('#new_account_input').val()))
    // $("#from").append(new Option ($('#new_account_input').val()))
    // $("#to").append(new Option ($('#new_account_input').val()))
    // $("#account_summary").append(`<li>${'#new_account_input'}: ${newAcc.balance}$</li>`)
    console.log(accountName)

    // } else if (checking if the acc already exists) {

  } else {
    alert("Enter a valid value")
    return false
  }

  const newAccount = {
    username: $("#new_account_input").val(),
    transactions: []
  }



  $.ajax({
    method: 'post',
    data: JSON.stringify({ newAccount }),
    url: 'http://localhost:3000/accounts',
    dataType: 'json',
    contentType: "application/json" //recieving back
  }).done((data) => {
    console.log('data post ajax', data);
    const newAcc = new Account(data.username);
    // const newAcc = {...data};

    console.log('balance', newAcc.balance);

    //Reset input
    $("#new_account_input").val("");
    alert("New account added");


  })
    .fail((error) => {
      alert(error);
    });

}
);
