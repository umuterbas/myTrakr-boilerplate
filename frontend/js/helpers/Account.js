class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    return this.transactions.reduce((total, transaction) => {
      return total + transaction;
    }, 0);
  }
}

//
$.ajax({
  method: 'get',
  url: 'http://localhost:3000/accounts',
  dataType: 'json',
}).done((data) => {
  console.log('data get ajax', data);

  $.each(data, (i, account) => {
    const newAcc = new Account(account.username);
    $("#selectuser").append(`<option value=${account.id}>${newAcc.username}</option>`)
    $("#from").append(`<option value=${account.id}>${newAcc.username}</option>`)
    $("#to").append(`<option value=${account.id}>${newAcc.username}</option>`)
    $("#filter_select_id").append(`<option value=${account.id}>${newAcc.username}</option>`)
    $("#account_summary").append(`<li>${newAcc.username}: <span id=${newAcc.username}>${newAcc.balance}$</span></li>`)
    console.log('testingacc', newAcc)
  });
});

$("#add_new_account").on('click', (event) => {
  event.preventDefault()
  if ($('#new_account_input').val() !== "") {

    let accountName = new Account($('#new_account_input').val());

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
  }).done((account) => {
    console.log('data post ajax', account);
    const newAcc = new Account(account.username);
    $("#selectuser").append(`<option value=${account.id}>${newAcc.username}</option>`)
    $("#from").append(`<option value=${account.id}>${newAcc.username}</option>`)
    $("#to").append(`<option value=${account.id}>${newAcc.username}</option>`)
    $("#account_summary").append(`<li>${newAcc.username}: <span id=${newAcc.username}>${newAcc.balance}$</span></li>`)
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
