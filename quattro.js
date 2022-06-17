const mainBody = document.querySelector('body');


const makeFirstRandomQuattro = () => {
    const firstQuattro = document.createElement('div');
    firstQuattro.style.width = String(Math.floor(Math.random() * 500) + 200) + 'px';
    firstQuattro.style.height = String(Math.floor(Math.random() * 200) + 50) + 'px';
    firstQuattro.style.backgroundColor = getRandomColor();
    firstQuattro.classList.add('firstQuattro');
    firstQuattro.style.margin = '20px';
    mainBody.append(firstQuattro);

    return mainBody;
}

const makeTwoRandomQuattro = () => {
    const twoQuattro = document.createElement('div');
    twoQuattro.style.width = String(Math.floor(Math.random() * 500) + 200) + 'px';
    twoQuattro.style.height = String(Math.floor(Math.random() * 200) + 50) + 'px';
    twoQuattro.style.backgroundColor = getRandomColor();
    twoQuattro.style.margin = '20px';
    twoQuattro.classList.add('twoQuattro');
    mainBody.append(twoQuattro);

    return mainBody;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

makeFirstRandomQuattro();
makeTwoRandomQuattro();

const divRef = document.querySelector('.firstQuattro');
divRef.addEventListener('mouseover', () => {
    console.log(`Width first: ${divRef.style.width}`);
    console.log(`Height first: ${divRef.style.height}`);
});

divRef.addEventListener('click', () => {
    alert(`Color first: ${divRef.style.backgroundColor}`)
});

const divTwoRef = document.querySelector('.twoQuattro');
divTwoRef.addEventListener('mouseover', () => {
    console.log(`Width second: ${divTwoRef.style.width}`);
    console.log(`Height second: ${divTwoRef.style.height}`);
});

divTwoRef.addEventListener('click', () => {
    alert(`Color second: ${divTwoRef.style.backgroundColor}`)
});
