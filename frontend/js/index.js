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
  // let amnt = $('#amount').val();
  console.log(transact);
  // console.log(amnt);
  $.ajax({
    method: "POST",
    url: 'http://localhost:3000/transaction',
      dataType: "json",
    }).done((data)=> {
    })
})


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

// add event listener to the button (insert POST)
