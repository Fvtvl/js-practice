const getCountDays = (date) => {
    let array = [];
    let day;
for (let i = new Date(date).getTime(); i < new Date('2022-12-31').getTime(); i += 86400000){
array.push(new Date(i));
}
if(array.length === 1 || array.length === 31){
    day = 'день';
} else if (array.length > 1 && array.length < 5 || array.length > 21 && array.length < 25){
    day = 'дні';
} else {
    day = 'днів';
}
return `до Нового 2023 року залишолось ${array.length} ${day}`;
}

console.log(getCountDays('2022-12-29'));