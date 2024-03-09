class Calculation{
    constructor(givenValue){
        this.givenValue=givenValue;
        this.result=givenValue
    }
    multiple=function(number){
        this.result*=number;
return this;
    }
    Addition=function(number){
    this.result+=number;
       return this
    }
    Division=function(number){
        if(number==0){
            return "it is not correct to divide into 0 parts which is considered impossible in math";
        }
        this.result/=number;
        return this
    }
    Substraction=function(number){
        this.result-=number;
        return this
    }
    getResult() {
        return this.result; 
    }
}
const Calculation1=new Calculation(50).multiple(3).Addition(2).Substraction(12).Division(2).getResult();
console.log(Calculation1); 