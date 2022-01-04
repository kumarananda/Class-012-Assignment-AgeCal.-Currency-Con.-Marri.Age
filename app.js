// 1. Age Calculator with age status alert by using DOM  

const name = document.querySelector('#name');
const year = document.querySelector('#year');
const agecheck = document.querySelector('#agecheck');
const result = document.querySelector("#result");

// console.log(agecheck);

agecheck.addEventListener('click', () => {

    if(name.value == '' || year.value == ''){
        result.innerHTML =`<p class="alert alert-denger">All filds are require</p>`
    }else{
        result.innerHTML = agecal(name.value, year.value);
    
    //form will empty after calculation 
    //when we set empty value after declearation
    name.value = "";
    year.value = "";
    }
    
})


// 2. Currency Converter for Pound, CAD, USD, Euro to BDT by using DOM 


const curAmount = document.getElementById('curAmount');
const curSelect = document.getElementById('curSelect');
// const curbutton = document.getElementById('curbutton')
const currencyresult = document.getElementById('currencyresult');
const curFormSubmit = document.getElementById('curFormSubmit')



curAmount.addEventListener('blur', () => {
    if(curAmount.value == 0){
        curAmount.style.border = "1px solid red"
    }else{
        curAmount.style.border = "1px solid green"
    }
});

curSelect.addEventListener('blur', () => {
    if(curSelect.value == 0){
        curSelect.style.border = "1px solid red"

    }else{
        curSelect.style.border = "1px solid green"
    }
});

// curAmount.addEventListener("keyup", () => {
//     curAmount.style.border = "";
// });


curFormSubmit.addEventListener('submit', (e) => {
    e.preventDefault();

    let regExp = /^[0-9.]*$/;

    if(regExp.test(curAmount.value) === false ){
        currencyresult.innerHTML = `<P style = "color: red;">Please  input correct amount</P>`;
    }else if(curAmount.value == ""){
        currencyresult.innerHTML = `<p class="alert alert-danger"> Please input amount</p>  `
    }else if(curSelect.value === curSelect.children[0].value){
        currencyresult.innerHTML = `<p class="alert alert-danger"> Please Select Your Cuurency  </p> `
    }else if(curSelect.value === curSelect.children[1].value){
        currencyresult.innerHTML = `<p class="alert alert-success text-center "> Your inputed ${curAmount.value} ${curSelect.children[1].textContent} = BDT ${curAmount.value *curSelect.children[1].value}.<br> Thanks for useing our app </p> `
        curAmount.value = "";
        curSelect.value = 0 ;
    }else if(curSelect.value === curSelect.children[2].value){
        currencyresult.innerHTML = `<p class="alert alert-success  text-center "> Your inputed ${curAmount.value} ${curSelect.children[2].textContent} = BDT ${curAmount.value *curSelect.children[2].value}.<br> Thanks for useing our app </p> `
        curAmount.value = "";
        curSelect.value = 0 ;
    }else if(curSelect.value === curSelect.children[3].value){
        currencyresult.innerHTML = `<p class="alert alert-success  text-center "> Your inputed ${curAmount.value} ${curSelect.children[3].textContent} = BDT ${curAmount.value *curSelect.children[3].value}.<br> Thanks for useing our app </p> `
        curAmount.value = "";
        curSelect.value = 0 ;
    }else if(curSelect.value === curSelect.children[4].value){
        currencyresult.innerHTML = `<p class="alert alert-success  text-center "> Your inputed ${curAmount.value} ${curSelect.children[4].textContent} = BDT ${curAmount.value *curSelect.children[4].value}.<br> Thanks for useing our app </p> `
        curAmount.value = "";
        curSelect.value = 0 ;
    }else if(curSelect.value === curSelect.children[5].value){
        currencyresult.innerHTML = `<p class="alert alert-success  text-center "> Your inputed ${curAmount.value} ${curSelect.children[5].textContent} = BDT ${curAmount.value *curSelect.children[5].value}.<br> Thanks for useing our app </p> `
        curAmount.value = "";
        curSelect.value = 0 ;
    }



});


// 3. marriage age check calculator for male and female with status


const marFormSubmit = document.getElementById('marFormSubmit');
const marName = document.getElementById('marName');
const marYear = document.getElementById('marYear');
const marSelect = document.getElementById('marSelect');
// const marButton = document.getElementById('marButton');
const marResult = document.getElementById('marResult');

console.log(marName.value);

let namePattran = /^[a-zA-Z ]*$/;
let birthYearpattran = /^[0-9]{4}$/;
let nameTest = namePattran.test(marName.value);
let bYteat = birthYearpattran.test(marYear.value);



marFormSubmit.addEventListener('submit', (event) => {
    event.preventDefault();

    
    
    if(marName.value == "" || marYear.value == ""){
        marResult.innerHTML = `<P style ="color:red">All field are required</P>`
    }else{
        if(nameTest == false || bYteat == false){
        marResult.innerHTML = `<P style ="color:red">your inputed name or year format is not match</P>`;
        }else{
            marResult.innerHTML = `<P style ="color:green">your inputed nameis  match</P>`;
        }
    }



});







