$(document).ready(() => {
  // New Transaction
// $.ajax({
//   method: "POST",
//   url: "http://localhost:3000",
//   dataType: "json",
//   }).done((data) => {
      
//   });
  // Changing between options available
  $('[name=type]').change((event) => {
    let Accountbtn = $('input[name="type"]:checked').val();
    event.preventDefault();
    radiovalue = Accountbtn;
    // console.log(radiovalue);
    if (radiovalue === 'withdraw' || radiovalue === 'deposit') {
      $('#transfer').hide();
      $('#account').show();
    } else if (radiovalue === 'transfer') {
      $('#account').hide();
      $('#transfer').show();
    }
  });
  
  // Category List
  $.ajax({
    method: "get",
    url: "http://localhost:3000/categories",
    dataType: "json",
  }).done((data) => {
  $('#buttoncategory').on('click', ()=> {
    let category = $('#addcategory').val();
    console.log(category);
    $.ajax({
      method: 'POST',
      data: JSON.stringify({
        newCategory: category,
    }),
    url: 'http://localhost:3000/categories',
      dataType: 'json',
      contentType: 'application/json',
  }).done(data => {
    console.log('cat',data);
    $('#categorylist').append(`<option>${data.name}</option>`);
  })
  })
  })
});

// Add information & Add transaction Amount

$('#buttontransaction').on('click', () => {
  let transact = $('#description').val();
  let amnt = $('#amount').val();
  let type = $('input[name="type"]:checked').val();
  console.log(transact);
  console.log(amnt);
  console.log(type);
  let accountId = $('#selectuser').val();
  let accountIdFrom = $('#from').val();
  let accountIdTo = $('#to').val();
  // console.log(accountId);
  // console.log(accountidfrom);
  // console.log(accountidto);
  let category = $('#addcategory').val();
    console.log(category);
  const newTransaction = {
    accountId, 
    accountIdFrom, 
    accountIdTo, 
    transact,
    amnt,
    type,
    category
  }
  $.ajax({
    method: "POST",
    url: 'http://localhost:3000/transaction',
    data: JSON.stringify({newTransaction}),
    contentType: "application/json",
      dataType: "json",
    }).done((data)=> {
      console.log(data);
    })
})

// when i create a new option i need to set a value of the option as account id 


// $.ajax({
//   method: "POST",
//   url: 'http://localhost:3000',
//   dataType: "json",
// }).done((data) => {
//   $('#description').change((e) => {
//     let desc = $('input [type=text]').val();
//     e.preventDefault();
//     console.log(desc);
//   })
// })