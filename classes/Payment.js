const paymentMethod = {
    card,
    cash,
    check
}
const PaymentList = new Array();
class User{
    #phon;
    #name;
    set setName(name){
        this.#name = name;
    }
    get getName(){
        return this.#name;
    }

    set setPhon(phon){
        this.#phon = phon;
    }
    get getPhon(){
        return this.#phon;
    }

    constructor(name, phon){
        this.#name = name;
        this.#phon = phon;
    }
}
class Payment{

    #date;
    #sum;
    #description;
    #status;
    #paymentMethod;
    #user;
    #id;
    static Id = 0;


    set setDate(date){
        this.#date = date;
    }
    get getDate(){
        return this.#date;
    }

    set setSum(sum){
        this.#sum = sum;
    }
    get getSum(){
        return this.#sum;
    }

    get getId(){
        return this.#id;
    }

    set setDescription(description){
        this.#description = description;
    }
    get getDescription(){
        return this.#description;
    }

    set setStatus(status){
        this.#status = status;
    }
    get getStatus(){
        return this.#status;
    }

    set setPaymentMethod(paymentMethod){
        this.#paymentMethod = paymentMethod;
    }
    get getPaymentMethod(){
        return this.#paymentMethod;
    }

    get getUser(){
        return this.#user;
    }

    constructor(date, sum, desc, status, paymentMethod, name, phon){
        this.#date = date;
        this.#description = desc;
        this.#user, name, phon.name = details.name;
        this.#details = new User(name, phon);
        this.#paymentMethod = paymentMethod;
        this.#status = status;
        this.#sum = sum;
        this.#id = ++this.Id;
    }

    FindById(id){
        const  p = PaymentList.filter(p=>p.getId===parseInt(id));
        return p;
    }
    //functions
    //יצירה
    CreatePayment(p){
        if(p!==undefined){
            PaymentList.push(p);
        }
        console.log("Payment");
    }
    //החזר
    CreateRePayment(id){
        const p = this.FindById(id);
        const help = PaymentList.filter(f=>f!==p);
        PaymentList = help;
        console.log("CreateRePayment in payment");
    }

    //עדכון
    UpdatePayment(id, sum){
        const ans = this.FindById(id);
        ans.setSum = sum;
        console.log("UpdatePayment in payment");
    }

}

class CradPayment extends Payment{
    #fourNumbers;
    constructor(fourNumbers, date, sum, desc, status, paymentMethod, user, name, phon){
        super(date, sum, desc, status, paymentMethod, user, name, phon);
        this.#fourNumbers = fourNumbers;
    }

    set setFourNumbers(fn)
    {
        this.#fourNumbers = fn;
    }
    get getFourNumbers(){
        return this.#fourNumbers;
    }

     //functions
     CreatePayment(c){
        if(c!==undefined){
            PaymentList.push(c);
        }
        console.log("Payment");
    }

    CreateRePayment(id){
        const p = FindById(id);
        const help = PaymentList.filter(f=>f!==p);
        PaymentList = help;
        console.log("CreateRePayment in CardPayment");
    }
}

class SlickPayment extends CradPayment{
    #slickId;
    constructor(id, fourNumbers, date, sum, desc, status, paymentMethod, name, phon){
        super(fourNumbers, date, sum, desc, status, paymentMethod, name, phon);
        this.#slickId = id;
    }

    set setSlickId(id){
        this.#slickId = id;
    }

    get getSlickId(){
        return this.#slickId;
    }

     //functions
     CreatePayment(s){
        if(s!==undefined){
            PaymentList.push(s);
        }
    }
}

payment = new CardPayment(1234,"02/06/2020", 1500, "jihue", 1, new paymentMethod.card, "esti", "0583281357");
payment = new Payment(1234,"02/06/2020", 1500, "jihue", 1, new paymentMethod.card, "esti", "0583281357");
payment = new SlickPayment(1234,"02/06/2020", 1500, "jihue", 1, new paymentMethod.card, "esti", "0583281357");
