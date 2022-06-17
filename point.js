const points = {
    'Вася': 200,
    'Петя': 300,
    'Даша': 250,
    'Андрей': 150,
    'Сергей': 450,
};


const getSumPoints = (points) => {
return `Загальна сумма - ${Object.values(points).reduce((acc, num) => acc + num , 0)} points`;
}

const getMaxPoints = (points) => {
    
    return `Найбільша кількість балів : ${Math.max(...Object.values(points))} у гравця - ${Object.keys(points)[Object.values(points).sort().length -1]}`;
}


const getMinPoints = (points) => {
    
    return `Найменша кількість балів : ${Math.min(...Object.values(points))} у гравця - ${Object.keys(points).sort()[0]}`;
}
console.log(getMinPoints(points));
