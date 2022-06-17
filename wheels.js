const km = window.prompt('Введите сколько км проехала машина');
const diamWheels = window.prompt('Введите диаметр колеса машины');
const howmanyDays = window.prompt('Сколько дней ехала машина?')

console.log(Number(km));
console.log(Number(diamWheels));
console.log(Number(howmanyDays));

const forDay = Math.trunc((km * 1000) * (diamWheels * 0.0254) * Math.PI);
const allforDay = Math.trunc(forDay) * 4;
const formanyDays = Math.trunc(forDay * howmanyDays);
const allformanyDays = Math.trunc(formanyDays * 4);
window.alert(`Каждое колесо сделало ${forDay} оборотов, а все 4 - ${allforDay} , 
За ${howmanyDays} дней колесо сделало ${formanyDays} оборотов, а все 4 - ${allformanyDays}`);