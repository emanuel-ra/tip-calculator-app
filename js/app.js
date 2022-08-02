let sesionStorage = window.localStorage;

let custom_tip = document.getElementById('custom_tip'); 
let btn_reset = document.getElementById('btn_reset');
let bill_amount = document.getElementById('bill_amount');
let number_people = document.getElementById('number_people');
let error_number_people = document.getElementById('error_number_people');
let error_bill_amount = document.getElementById('error_bill_amount');
let tip_total_by_person = document.getElementById('tip_total_by_person');
let total_person = document.getElementById('total_person_amount');
let btns = document.querySelectorAll('.btn-percentage');


const calculate = () => {

    let amount = bill_amount.value;
    let persons = number_people.value;
    let percentage = sesionStorage.getItem('percentage');

    if(percentage=="") return false;
    if(amount=="") return false;
    if(persons=="") return false;
    if(isNaN(percentage)) return false;
    if(isNaN(amount)) return false;
    if(isNaN(persons)) return false;
    
    let total_tip = new Number(parseFloat(amount)*parseFloat(percentage)/100);    
    let total_tip_by_person = total_tip/persons;  

    let total_by_person = new Number( (parseFloat(amount)/parseInt(persons)) + total_tip_by_person);   
    
    tip_total_by_person.innerText = `$ ${total_tip_by_person.toFixed(2)}`;
    total_person.innerText = `$ ${total_by_person.toFixed(2)}`;        
}

const ResetApp = () => {
    localStorage.setItem('percentage',0);
    bill_amount.value = "";
    number_people.value = "";

    btns.forEach( (btn,i)=>{
        btn.classList.remove('btn-active');
    } );

    tip_total_by_person.innerText = "$ 00.00";
    total_person.innerText = "$ 00.00";

}

btns.forEach( (btn,i) =>{
    btn.addEventListener('click', ()=>{
        let percentage = btn.getAttribute("data-percentage");

        btns.forEach( (btn,i)=>{
            btn.classList.remove('btn-active');
        } );

        btn.classList.add('btn-active');
        localStorage.setItem('percentage',percentage);

        calculate();
    });    
});

bill_amount.addEventListener('keyup', (element)=>{
    let amount = element.target.value;

    if(isNaN(amount)){
        error_bill_amount.innerText = "Only Numbers";
        return false;
    }else{
        error_bill_amount.innerText = " ";
    }
    calculate();
});

custom_tip.addEventListener('keyup', (element) => {
    let percentage = element.target.value;
    
    if(isNaN(percentage)) return false;

    localStorage.setItem('percentage',percentage);    

    calculate();
});

number_people.addEventListener('keyup', (element) => {
    let number = element.target.value;

    if(isNaN(number)){
        error_number_people.innerText = "Can't be zero";
        return false;
    }else{
        error_number_people.innerText = " ";
    }
    calculate();
});

btn_reset.addEventListener('click',ResetApp);

ResetApp();