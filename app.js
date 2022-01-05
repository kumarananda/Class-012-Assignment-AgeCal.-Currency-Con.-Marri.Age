// 1. Age Calculator with age status alert by using DOM  

const agename = document.querySelector('#agename');
const ageyear = document.querySelector('#ageyear');
const agecheck = document.querySelector('#agecheck');
const ageresult = document.querySelector("#ageresult");

// console.log(agecheck);

agename.addEventListener("blur", () => {
    if (agename.value == "") {
        agename.style.border = "1px solid red";

    }
});
ageyear.addEventListener("blur", () => {
    if (ageyear.value == "") {
        ageyear.style.border = "1px solid red";

    }
});

agecheck.addEventListener('click', () => {

    if(agename.value == '' || ageyear.value == ''){
        ageresult.innerHTML =`<p class="alert alert-denger">All filds are require</p>`
    }else{
        ageresult.innerHTML = agecal(agename.value, ageyear.value);
    
    //form will empty after calculation 
    //when we set empty value after declearation
    agename.value = "";
    ageyear.value = "";
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

// console.log(marName.value);


marName.addEventListener('blur', () => {
    if(marName.value == ""){
        marName.style.border = "1px solid red";

    }
});
marYear.addEventListener('blur', () => {
    if(marYear.value == ""){
        marYear.style.border = "1px solid red";

    }
});


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


// Sign Up Form

const signup_form = document.querySelector('#signup_form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const uname = document.querySelector('#uname');
const msg = document.querySelector('.msg');

const reqname = document.querySelector('#reqname');
const reqemail = document.querySelector('#reqemail');

name.addEventListener('blur', () => {
    if (name.value == "") {
        name.style.border = "1px solid red";

    }
});
email.addEventListener('blur', () => {
    if (email.value == "") {
        email.style.border = "1px solid red";

    }
});
uname.addEventListener('blur', () => {
    if (uname.value == "") {
        uname.style.border = "1px solid red";

    }
});


// signup_form.addEventListener('submit', function (event) {
//         event.preventDefault();

//         if(name.value == "" || email.value == "" || uname.value == ""){
//             alert('All fileds are required');
//         }else{
//             alert('Done')
//         }

//     });

// fast way
// signup_form.addEventListener();



signup_form.onsubmit = (event) => {
    event.preventDefault();


    if(email.value == ""){
        reqemail.innerHTML = `<p id='reqname' style="color:red">Email is required</p>`
    }else{
        reqemail.innerHTML = `<p></p>`
    }

    // name.style = (name.value == "") ? style= "border:1px solid red" : style= "border:1px solid #212529" ;
    // email.style = (email.value == "") ? style= "border:1px solid red" : style= "border:1px solid #212529" ;
    // uname.style = (uname.value == "") ? style= "border:1px solid red" : style= "border:1px solid #212529" ;

    if(name.value == ""){
        name.style = `border:1px solid red`;
        name.placeholder ='name is required';
        reqname.innerHTML =`<p id='reqname' style="color:red">Name is required</p>`;
    }else{
        name.style = `border:1px solid #212529;`;
        name.placeholder ='name';
        reqname.innerHTML =`<p></p>`
     
    }

    if(email.value == ""){
        email.style = `border:1px solid red`;
        email.placeholder ='email is required';
    }else{
        email.style = `border:1px solid #212529;`;
        email.placeholder ='email';
    }
    if(uname.value == ""){
        uname.style = `border:1px solid red`;
        uname.placeholder ='username is required';
    }else{
        uname.style = `border:1px solid #212529;`;
        uname.placeholder ='username';
    }


    if(name.value == "" || email.value == "" || uname.value == ""){
        msg.innerHTML = `<p class="alert alert-danger">All fileds are required!</p>`
    }else{
        msg.innerHTML = `<p class="alert alert-success">Data Stable!</p>`
    }


}






