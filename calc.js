function Calc(name) {
    this.name = name;
    this.sum = function (...args) {
        return `Мій калькулятор - ${new Date().getDate()}.${(new Date().getMonth() +1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() +1)}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}: сума = ${args.reduce((acc, num) => acc + num, 0)}, (${args})`;
    }

    this.minus = function (a, b){
        return `Мій калькулятор - ${new Date().getDate()}.${(new Date().getMonth() +1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() +1)}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}: віднімання = ${a - b} , (${a}, ${b})`;;
    }

    this.miltiply = function (...args){
        return `Мій калькулятор - ${new Date().getDate()}.${(new Date().getMonth() +1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() +1)}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}: множення = ${args.reduce((acc, num) => acc * num, 1)}, (${args})`;
    }

    this.divide = function (a, b){
        return `Мій калькулятор - ${new Date().getDate()}.${(new Date().getMonth() +1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() +1)}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}: ділення = ${a / b} , (${a}, ${b})`;;
    }
}

const calc1 = new Calc()

console.log(calc1.divide(30, 10));