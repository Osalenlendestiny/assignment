function QuadraticEquation(a, b, c) {
    const intergal = b**2 - 4 * a * c;
    let X1, X2;
    if (intergal > 0) {
        X1 = (-b + parseInt(intergal)) / (2*a);
        X2 = (-b - parseInt(intergal)) / (2*a);
        return `The roots of the equation is X1 = ${X1}, X2 = ${X2}`;
   
    }
    }
    console.log(QuadraticEquation(1, 6, 3));
