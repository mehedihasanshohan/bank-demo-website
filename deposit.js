// step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
  // console.log('button clicked');
  // step-2
  const depositField = document.getElementById('deposit-field');
  const newdepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newdepositAmountString);
  // console.log(depositAmount);
  // step-3
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;
  depositField.value = '';
  // step-5:get current total
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  // step-6 calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  // set the balabnce total
  balanceTotalElement.innerText = currentBalanceTotal;
})

