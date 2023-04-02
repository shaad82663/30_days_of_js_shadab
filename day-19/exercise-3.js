function personAccount(firstname, lastname) {
    let incomes = {};
    let expenses = {};
    let totalIncome = 0;
    let totalExpense = 0;
    let accountInfo = `${firstname} ${lastname}'s account balance:`;
  
    function addIncome(amount, description) {
      totalIncome += amount;
      incomes[description] = amount;
    }
  
    function addExpense(amount, description) {
      totalExpense += amount;
      expenses[description] = amount;
    }
  
    function accountBalance() {
      return totalIncome - totalExpense;
    }
  
    return {
      addIncome,
      addExpense,
      accountBalance,
      accountInfo,
    };
  }