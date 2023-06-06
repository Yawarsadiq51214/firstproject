let totaLAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totaLAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError= document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const amount =document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");
let budget=document.getElementById("submit");
//let tempAmount = 0;
let tempAmount =totaLAmount.value;
// totaLAmountButton.addEventListener("click", () => {
    
//     if (tempAmount === "" || tempAmount < 0){
//         errorMessage.classList.remove("hide");
//     } else {
//     errorMessage.classList.add("hide");
   
   
//      amount.innerHTML = tempAmount;
//     balanceValue.innerText = tempAmount -  expenditureValue.innerText;
    
   
//     totaLAmount.value = "";
//     }
// })
// ;

let value = budget.value;;
let kharche = expenditureValue;

function getdata(){
budget.innerHTML=totaLAmount.value;
 value =budget.innerHTML
console.log(totaLAmount.value)
console.log(value)
alert(value)
}
var expense = userAmount.value;
console.log(expense)

function expensecheck(){
    alert(userAmount.value)
    expenditureValue.innerHTML=userAmount.value
     kharche= expenditureValue.innerHTML
}
// console.log(kharche)
// function checkamount(){
//     expense.innerHTML= userAmount.value;
//  -   let ib =  expense.innerHTML
// }
var balance;
function balancecheck(){
     budget = totaLAmount.value;
     expense = userAmount.value;
     balance = budget - expense;
    //  console.log(balance)
     balanceValue.innerHTML = `${balance}`


     var newList = document.querySelector(".list");
newList.innerHTML += `<div class="output-container flex space">
<div>
    <p>total budget</p>
    <span id="submit">0</span>
</div>
<div>
    <p>expenset</p>
    <span id="expenditure-value">0</span>
</div>
<div>
    <p>balance</p>
    <span id="balance-amount">${balance}</span>
</div>
</div>`
}




