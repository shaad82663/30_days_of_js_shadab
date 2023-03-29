class PersonAccount {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.incomes = {};
      this.expenses = {};
    }
    addIncome(amount, decription){
        this.incomes[decription]= amount
    }
    addExpanse(amount, decription){
        this.expenses[decription] = amount
    }
    
    totalIncome(){
        const income = Object.values(this.incomes)
        const totalIncome = income.reduce( (acc, el) => acc + el)
        return totalIncome
    }
    
   totalExpanse(){
        const expanse = Object.values(this.expenses)
        const totalExpanse = expanse.reduce( (acc, el) => acc + el)
        return totalExpanse
    }
    
    accountBalance(){
        return this.totalIncome() - this.totalExpanse()
    }
    
    accountInfo(){
        console.log(`Account Holder : ${this.firstname} ${this.lastname}`)
    }
}
const pa = new PersonAccount('md', 'shaad')
pa.addIncome(3000, 'salary')
pa.addIncome(300, 'part')
pa.addExpanse(125, 'milk')
pa.addExpanse(255, 'Food')
console.log(pa.totalIncome())
console.log(pa.totalExpanse())
console.log(pa.accountBalance())