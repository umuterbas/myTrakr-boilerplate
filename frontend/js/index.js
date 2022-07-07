

$(document).ready(() => {
  // New Transaction
$.ajax({
  method: "POST",
  url: "http://localhost:3000",
  dataType: "json",
  }).done((data) => {
    
    
  });
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
      method: 'post',
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

