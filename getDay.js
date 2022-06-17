

const days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];


const getDay = (date) => {
return days[new Date(date.split('-').reverse().join('-')).getDay()];

}

console.log(getDay('27-11-1988'));





