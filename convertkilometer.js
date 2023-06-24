function converttomiles(kilometer) {
    const miles = (kilometer / 1.609);
    return miles;
}

const miles = converttomiles(1000);
console.log(parseInt(miles));