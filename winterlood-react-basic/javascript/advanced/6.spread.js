const cookie = {
    base: 'cookie',
    madeIn: 'korea',
};

const chocochipCookie = {
    ...cookie,
    toping: 'chocochip',
};

const blueberryCookie = {
    ...cookie,
    toping: 'blueberry',
};

const strawberryCookie = {
    ...cookie,
    toping: 'strawberry',
};

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);

