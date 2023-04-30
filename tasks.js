function isLess(a, b) {
    return (a < b) ? true : false;
}

console.log(isLess(10, 15));
console.log(isLess(15, 10));

let count = 0;

function cc(card) {
    if (card == 2 ||
        card == 3 ||
        card == 4 ||
        card == 5 ||
        card == 6) {
        count++;
    }  else if (card == 7 ||
                card == 8 ||
                card == 9 ) {
        count += 0;
    }  else {
        count--;
    }
}

function show(count) {
    if (count > 0) {
        console.log(count + " Bet");
    } else {
        console.log(count + " Hold");
    }
}


cc(3); cc(2); cc("A"); cc(10); cc("K");
show(count);

const increment = (number, value) => number + (value)? number + value : number + 1;
console.log(increment(5, 2));
console.log(increment(5));

function convertCtoF(celcius) {
    return celcius * 9 / 5 + 32;
}

console.log(convertCtoF(30));