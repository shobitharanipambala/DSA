class BankDetails{
    constructor(name,accountnumber,ifsccode){
    this.name = name;
    this.accountnumber=accountnumber;
    this.ifsccode=ifsccode;
}
  Deatails(){
    return `Deatails of the user  Name:${this.name} AccountNumber:${this.accountnumber} Ifsccode: ${this.ifsccode}`
}
}
const  user = new BankDetails("shobitha", 16747483563,"kphb",54545);
console.log(user.Deatails());