let formValueName;
let formValuePhone;
let formValueEmail;
let formValueGrade;

const formName = document.querySelector('.form-valueName');
const formPhone = document.querySelector('.form-valuePhone');
const formEmail = document.querySelector('.form-valueEmail');
const formGrade = document.querySelector('.form-valueGrade');

formName.addEventListener('change', (e) => {
    if(!e.target.value){
        formName.style.border = '1px solid red';
        formValueName = '';
    }
    else{
        formName.style.border = '1px solid rgba(102, 102, 102, 0.90)'
        formValueName = e.target.value;
    }
})
formPhone.addEventListener('change', (e) => {
    if(e.target.value.match(/\D/g)){
        formPhone.style.border = '1px solid red';
        formValuePhone = '';
    }
    else{
        formValuePhone = e.target.value;
        formPhone.style.border = '1px solid rgba(102, 102, 102, 0.90)'
    }
})
formEmail.addEventListener('change', (e) => {
    const emailValidationRegexp = /\w+@[A-z]{3,}.[A-z]{2,3}/
    if(!e.target.value.match(emailValidationRegexp)){
        formEmail.style.border = '1px solid red';
        formValueEmail = '';
    }
    else{
        formValueEmail = e.target.value;
        formEmail.style.border = '1px solid rgba(102, 102, 102, 0.90)'
    }
})
formGrade.addEventListener('change', (e) => {
    if(!e.target.value){
        formGrade.style.border = '1px solid red';
        formValueGrade = '';
    }
    else{
        formGrade.style.border = '1px solid rgba(102, 102, 102, 0.90)'
        formValueGrade = e.target.value;
    }
})