const Bank = function(){

    let _buget = 500;

    const depositCash   = (cash) => _buget += cash;
  
    const checkBalance  = () => console.log(_buget);
  
    return{
        deposit: depositCash,
  
        showBalance : checkBalance
    }
  }


const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950