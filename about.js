const validPin = 1234;
const transactionData = [];

// share function



function setToggle(id){
    const forms = document.getElementsByClassName("");
    for(const form of forms){
        form.style.display = "none"
    }
    document.getElementById("").style.display = "block";
}

// funtion to color toggle


    function buttonToggle (id) {
         const fromBtn = document.getElementsByClassName("from-butn")
    for(const btn of fromBtn){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f30d]")
        btn.classList.add("border-gray-300");
    }
     document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f30d]");
    }



document.getElementById("add-money-btn")
.addEventListener("click", function(e) {
e.preventDefault();

const bank = document.getElementById("bank").value;
const accountNumber = document.getElementById("account-number").value;

const amountAdd = parseInt(document.getElementById("amount-add").value);
const addPin = parseInt(document.getElementById("add-pin").value);

if (accountNumber.length < 11) {
    alert("Please enter a valid 11 digit account number");
    return;
}
if (addPin !== validPin) {
    alert("Please enter a valid pin");
    return;
}
const availableBalanceElement = parseInt(document.getElementById("available-balance").innerText)

totalNewBalance = amountAdd + availableBalanceElement;
document.getElementById("available-balance").innerText = totalNewBalance;

const data = {
    name: "Add Money",
    date : new Date().toLocaleTimeString()
}
 transactionData.push(data);
});

// cashout feature

document.getElementById("withdraw-btn")
.addEventListener("click", function(e){
e.preventDefault();
const agentNum = parseInt(document.getElementById("agent-valid-number").value);
const amount = parseInt(document.getElementById("withdraw-amount").value);
const agentPinNumber = parseInt(document.getElementById('agent-pin-number').value);

if (agentNum.length < 11){
    alert("please valid number")
    return;
}

if (agentPinNumber !== validPin) {
    alert("Please enter a valid pin");
    return;
}
const availableBalance = parseInt(document.getElementById("available-balance").innerText);
NewBalance = availableBalance - amount;
document.getElementById("available-balance").innerText = NewBalance;
const data = {
    name: "Cash Out",
    date : new Date().toLocaleTimeString()
}
 transactionData.push(data);
});


// transfer money

document.getElementById("send-now-button")
.addEventListener("click", function(e){
e.preventDefault();
const agentNum = parseInt(document.getElementById("transfer-number").value);
const amount = parseInt(document.getElementById("transfer-amount").value);
const agentPinNumber = parseInt(document.getElementById('transfer-pin').value);

if (agentNum.length < 11){
    alert("please valid number")
    return;
}

if (agentPinNumber !== validPin) {
    alert("Please enter a valid pin");
    return;
}
const availableBalance = parseInt(document.getElementById("available-balance").innerText);
NewBalance = availableBalance - amount;
document.getElementById("available-balance").innerText = NewBalance;
const data = {
    name: "Transfer Money",
    date : new Date().toLocaleTimeString()
}
 transactionData.push(data);
});

// get bonus

document.getElementById("get-bonus-button")
.addEventListener("click", function(e){
e.preventDefault();
const bonus = parseInt(document.getElementById("bonus-coupon").value);

const availableBalance = parseInt(document.getElementById("available-balance").innerText);
NewBalance = availableBalance + bonus;
document.getElementById("available-balance").innerText = NewBalance;
const data = {
    name: "Get Bonus",
    date : new Date().toLocaleTimeString()
}
 transactionData.push(data);
});

// pay bill

document.getElementById("pay-now-btn")
.addEventListener("click", function(e) {
e.preventDefault();

const bankAccount = document.getElementById("pay-bank").value;
const payAccountNumber = document.getElementById("pay-account-number").value;
const payAmountAdd = parseInt(document.getElementById("pay-amount-add").value);
const payAddPin = parseInt(document.getElementById("pay-add-pin").value);

if (payAccountNumber.length < 11) {
    alert("Please enter a valid 11 digit account number");
    return;
}
if (payAddPin !== validPin) {
    alert("Please enter a valid pin");
    return;
}
const availableBalanceElement = parseInt(document.getElementById("available-balance").innerText)

totalNewBalance =  availableBalanceElement - payAmountAdd;
document.getElementById("available-balance").innerText = totalNewBalance;
const data = {
    name: "Pay Bill",
    date : new Date().toLocaleTimeString()
}
 transactionData.push(data);
});


document.getElementById("trans-btn").addEventListener("click", function(){
   const transactionContainer = document.getElementById("transaction-container")
   transactionContainer.innerText = ""
   for(const data of transactionData){
    const div = document.createElement("div")
    div.innerHTML =`
    <div class="bg-white p-3 flex justify-between items-center">
        <div class="flex items-center">
            <div class="border-2 p-3 rounded-full bg-[#f4f5f7]">
                <img src="./assets/wallet1.png" alt="" class="">
                </div>
                <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
       </div>
    `

    transactionContainer.appendChild(div);

   }
})


// toggleing forms

//  add money
document.getElementById("add-button").addEventListener("click", function() {

    // const fromBtn = document.getElementsByClassName("from-butn")
    // for(const btn of fromBtn){
    //     btn.classList.remove("border-[#0874f2]","bg-[#0874f30d]")
    //     btn.classList.add("border-gray-300");
    // }
    //  document.getElementById("add-button").classList.remove("border-gray-300");
    // document.getElementById("add-button").classList.add("border-[#0874f2]","bg-[#0874f30d]");

    buttonToggle ("add-button")

document.getElementById("cash-out-parent").style.display = "none";
document.getElementById("add-money-parent").style.display = "block";
document.getElementById("transfer-parent").style.display = "none";
document.getElementById("get-bonus-parent").style.display = "none";
document.getElementById("pay-bill-parent").style.display = "none";
document.getElementById("transaction-parent").style.display = "none";
});
// cash out
document.getElementById("cash-out-button").addEventListener("click", function() {
    // const fromBtn = document.getElementsByClassName("from-butn")
    // for(const btn of fromBtn){
    //     btn.classList.remove("border-[#0874f2]","bg-[#0874f30d]");
    //     btn.classList.add("border-gray-300");
    // }
    // document.getElementById("cash-out-button").classList.remove("border-gray-300");
    // document.getElementById("cash-out-button").classList.add("border-[#0874f2]","bg-[#0874f30d]");
    buttonToggle ("cash-out-button")
document.getElementById("add-money-parent").style.display = "none";
document.getElementById("cash-out-parent").style.display = "block";
document.getElementById("transfer-parent").style.display = "none";
document.getElementById("get-bonus-parent").style.display = "none";
document.getElementById("pay-bill-parent").style.display = "none";
document.getElementById("transaction-parent").style.display = "none";
});
// transfer money
document.getElementById("transfer-money-btn").addEventListener("click", function() {
    //  const fromBtn = document.getElementsByClassName("from-butn")
    // for(const btn of fromBtn){
    //     btn.classList.remove("border-[#0874f2]","bg-[#0874f30d]")
    //     btn.classList.add("border-gray-300");
    // }
    // document.getElementById("transfer-money-btn").classList.remove("border-gray-300");
    // document.getElementById("transfer-money-btn").classList.add("border-[#0874f2]","bg-[#0874f30d]");
    buttonToggle ("transfer-money-btn")
document.getElementById("cash-out-parent").style.display = "none";
document.getElementById("add-money-parent").style.display = "none";
document.getElementById("transfer-parent").style.display = "block";
document.getElementById("get-bonus-parent").style.display = "none";
document.getElementById("pay-bill-parent").style.display = "none";
document.getElementById("transaction-parent").style.display = "none";
});
// get bonus
document.getElementById("get-bonus-btn").addEventListener("click", function() {
    //  const fromBtn = document.getElementsByClassName("from-butn")
    // for(const btn of fromBtn){
    //     btn.classList.remove("border-[#0874f2]","bg-[#0874f30d]")
    //     btn.classList.add("border-gray-300");
    // }
    // document.getElementById("get-bonus-btn").classList.remove("border-gray-300");
    // document.getElementById("get-bonus-btn").classList.add("border-[#0874f2]","bg-[#0874f30d]");
    buttonToggle("get-bonus-btn")
document.getElementById("cash-out-parent").style.display = "none";
document.getElementById("add-money-parent").style.display = "none";
document.getElementById("transfer-parent").style.display = "none";
document.getElementById("get-bonus-parent").style.display = "block";
document.getElementById("pay-bill-parent").style.display = "none";
document.getElementById("transaction-parent").style.display = "none";
});
// pay bill
document.getElementById("pay-bill-btn").addEventListener("click", function() {
    //  const fromBtn = document.getElementsByClassName("from-butn")
    // for(const btn of fromBtn){
    //     btn.classList.remove("border-[#0874f2]","bg-[#0874f30d]")
    //     btn.classList.add("border-gray-300");
    // }
    // document.getElementById("pay-bill-btn").classList.remove("border-gray-300");
    // document.getElementById("pay-bill-btn").classList.add("border-[#0874f2]","bg-[#0874f30d]");
    buttonToggle("pay-bill-btn")
document.getElementById("cash-out-parent").style.display = "none";
document.getElementById("add-money-parent").style.display = "none";
document.getElementById("transfer-parent").style.display = "none";
document.getElementById("get-bonus-parent").style.display = "none";
document.getElementById("pay-bill-parent").style.display = "block";
document.getElementById("transaction-parent").style.display = "none";
});
// transaction
document.getElementById("trans-btn").addEventListener("click", function() {
    //  const fromBtn = document.getElementsByClassName("from-butn")
    // for(const btn of fromBtn){
    //     btn.classList.remove("border-[#0874f2]","bg-[#0874f30d]")
    //     btn.classList.add("border-gray-300");
    // }
    // document.getElementById("trans-btn").classList.remove("border-gray-300");
    // document.getElementById("trans-btn").classList.add("border-[#0874f2]","bg-[#0874f30d]");
    buttonToggle("trans-btn")
document.getElementById("cash-out-parent").style.display = "none";
document.getElementById("add-money-parent").style.display = "none";
document.getElementById("transfer-parent").style.display = "none";
document.getElementById("get-bonus-parent").style.display = "none";
document.getElementById("pay-bill-parent").style.display = "none";
document.getElementById("transaction-parent").style.display = "block";
});




