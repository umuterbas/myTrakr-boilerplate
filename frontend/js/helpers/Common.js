//common functions that can be used in different cases
// import { getUserById } from './Account.js'

// $("#filter_select_id").change(function () {
//     let filterValue = $("#filter_select_id").val();

//     if (filterValue !== "Show All") {


//         $("#transaction_list").html("")
//         console.log(filterValue);
//         const account = getUserById(filterValue)
//         account.transactions.forEach(transaction => {
//             $("#transaction_list").append(`
//       <tr>
//         <td>${transaction.accountId}</td>
//         <td>${account.username}</td>
//         <td>${transaction.type}</td>
//         <td>${transaction.category}</td>
//         <td>${transaction.description}</td>
//         <td>${transaction.amount}</td>
//         <td>${transaction.accountIdFrom}</td>
//         <td>${transaction.accountIdTo}</td>
//       </tr>
//       `)
//         });
//     } else {
//         $.each(newTransactions, (i, transaction) => {
        
//             $("#transaction_list").append(`
//             <tr>
//               <td>${transaction.accountId}</td>
//               <td>${newAcc.username}</td>
//               <td>${transaction.type}</td>
//               <td>${transaction.category}</td>
//               <td>${transaction.description}</td>
//               <td>${transaction.amount}</td>
//               <td>${transaction.accountIdFrom}</td>
//               <td>${transaction.accountIdTo}</td>
//             </tr>
//             `)
//         })
//     }


// });

