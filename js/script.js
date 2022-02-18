// function area
function updateField(iteamId){
    const incomeCostInputText = document.getElementById(iteamId);
    let incomeCostInput = incomeCostInputText.value;
    incomeCostInput = parseFloat(incomeCostInput);
    return incomeCostInput;
}
document.getElementById('calucate_button').addEventListener('click',function(){
    // income inpur section 
    const incomeInputValue = updateField('inputIncome');
    // food input section 
    const foodInputValue = updateField('inputFood');
    // rent input section 
    const rentInputValue = updateField('inputRent');
    // clothes input section 
    const clothesInputValue = updateField('inputClothes');
    // total expense 
    const expenseMoney = document.getElementById('expenseMoney');
    const totalexpense = (foodInputValue + rentInputValue + clothesInputValue);
    expenseMoney.innerText = totalexpense;
    // total balance 
    const totalBalanceMoney = document.getElementById('balanceMoney');
    const totalLastBalance = incomeInputValue - totalexpense;
    totalBalanceMoney.innerText = totalLastBalance;
// error handle 

     if (expenseMoney.innerText >= totalBalanceMoney) {
        alert("Please input your correct income / Expenses");
        totalBalanceMoney.innerText = "Plz input Total icome Amount";
        expenseMoney.innerText = "Enter your Total Expense Amount"
      } 
      
      else if (
        incomeInputValue == "" ||
        isNaN(incomeInputValue) ||
        incomeInputValue <= 0 ||
        foodInputValue == "" ||
        isNaN(foodInputValue) ||
        foodInputValue < 0 ||
        rentInputValue == "" ||
        isNaN(rentInputValue) ||
        rentInputValue < 0 ||
        isNaN(clothesInputValue) ||
        clothesInputValue == "" ||
        clothesInputValue < 0
      ) {
        alert("Please input your correct informationd.");
        totalBalanceMoney.innerText = "Please input your total balance.";
        expenseMoney.innerText = "Please input your expense money.";
      }

});
 // saving section 
 document.getElementById('savingButton').addEventListener('click',function(){
    const SaveIncomeInputText = document.getElementById('inputIncome');
    let saveIncomeInput = SaveIncomeInputText.value;
    saveIncomeInput = parseFloat(saveIncomeInput);
//saving section
    const inputSaveText = document.getElementById('inputSave');
    const incomesavingInput = inputSaveText.value;
    const totalSaving = (incomesavingInput * saveIncomeInput)/100;
//calculation
   const lastCalculaion = document.getElementById('savingMoney');
   lastCalculaion.innerText = totalSaving;
// remaning balanace 
    const balanceMoneys = document.getElementById('balanceMoney');
    const balanceMoney = parseFloat(balanceMoneys.innerText);
    const totalExistMoney =  balanceMoney - totalSaving;
    const lastSaving = document.getElementById('remainingMoney');
    lastSaving.innerText = totalExistMoney;
// error handle for save money 
if(lastSaving.innerText < 0){
  alert("Please input your correct saving informationd.");
  lastSaving.innerText =
  "You are nor able to save money";
  lastCalculaion.innerText = "You have no money for save";
}
    else if(incomesavingInput == ''){
      alert("Please input your correct saving informationd.");
      lastSaving.innerText =
      "Please input your correct saving informationd.";
      lastCalculaion.innerText = "Please input your correct saving informationd.";
    }
    else if (balanceMoney.innerText < 0) {
        alert("Please input your correct saving informationd.");
        lastCalculaion.innerText.innerText =
          "Please input your correct saving informationd.";
      } else if (incomesavingInput == "" || isNaN(incomesavingInput) || incomesavingInput <= 0) {
        alert("Please input your correct saving informationd.");
        lastSaving.innerText =
          "Please input your correct saving informationd.";
          lastCalculaion.innerText = "Please input your correct saving informationd.";
      }
 });