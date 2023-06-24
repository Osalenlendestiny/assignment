function converttoCelsius(fahrenheit) {
    const celsius = (5/9) * (fahrenheit - 32);
    return celsius;
}

const celsius = converttoCelsius(340);
console.log(parseInt(celsius));