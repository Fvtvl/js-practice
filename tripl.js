const mainBody = document.querySelector('body');
mainBody.style.display = 'flex';
mainBody.style.flexWrap = 'wrap';


const makeQuattro = () => {
    for (let i = 0; i <= 1000; i += 1){
    const div = document.createElement('div');
    div.style.backgroundColor = 'aquamarine';
    div.style.width = '70px';
    div.style.height = '70px';
    div.style.margin = '10px';
    mainBody.append(div);
    }
    return mainBody;  
};

const makeStepTwo = () => {
    const divRef = document.querySelectorAll('div');
    for (let i = 0; i <= 1000; i += 1){
    divRef[i].style.width = '100px';
    divRef[i].style.height = '100px';
    divRef[i].style.backgroundColor = 'purple';
    }
    return divRef;  
};

const makeStepThree = () => {
    const divRef = document.querySelectorAll('div');
    for (let i = 0; i <= 1000; i += 1){
    divRef[i].textContent = i + 1;
    }
    return divRef;
};

const makeStepFour = () => {
    const divRef = document.querySelectorAll('div');
    for (let i = 0; i <= 1000; i += 1){
    if ( (i + 1) % 3 === 0){
    divRef[i].classList.add('quattro__step4')
    divRef[i].style.backgroundColor = 'red';
    }
    }
    return divRef;
};

const makeStepFive = () => {
    const divRef = document.querySelectorAll('div');
    for (let i = 0; i <= 1000; i += 1){
    if ( (i + 1) % 15 === 0){
    divRef[i].classList.remove('quattro__step4');
    divRef[i].style.backgroundColor = 'white';
    divRef[i].style.border = '30px solid transparent';
    divRef[i].style.borderBottom = '43px solid rgb(0, 100, 0)';
    divRef[i].style.display = 'block';
    divRef[i].style.width = '0px';
    divRef[i].style.height = '0px';

    }
    }
    return divRef;
};

const makeDeleteRed = () => {
    const divRef = document.querySelectorAll('div');
    for (let i = 0; i <= 1000; i += 1){
    if (divRef[i].classList.contains('quattro__step4')){
    divRef[i].remove();
    }
}
return divRef;
};

setTimeout(makeQuattro, 2000);
setTimeout(makeStepTwo, 4000);
setTimeout(makeStepThree, 6000);
setTimeout(makeStepFour, 8000);
setTimeout(makeStepFive, 8000);
setTimeout(makeDeleteRed, 10000);