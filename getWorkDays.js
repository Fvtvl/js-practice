const getCountWorkDays = (date1, date2) => {
    let array = [];
    for (let i = new Date(date1).getTime(); i < new Date(date2).getTime(); i += 86400000){
       array.push(new Date(i));
};

return `Між датами кількість робочих днів -${array.filter(elem => elem.getDay() !== 0 && elem.getDay() !== 6).length}`;
}


console.log(getCountWorkDays('2022-06-10', '2022-06-24'));

