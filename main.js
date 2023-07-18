
let currentMonth = new Date();

let a = currentMonth.getMonth() + 1;

if ((a >= 1) && (a < 4)) {

    document.write(`${a} It's winter month`)

}

else if ((a >= 4) && (a < 8)) {

    document.write(`${a} It's winter summer`)

}

else {

    document.write(`${a} It's winter fall`)

}







