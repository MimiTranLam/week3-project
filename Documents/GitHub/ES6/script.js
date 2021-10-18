/* Shorthand, Refactoring */
// P1&2
let name = "Parrot";
let colors = ["Red", "Green", "Blue", "Yellow"];
let talons = true;

let bird = {
    name,
    colors,
    talons
};

// console.log(bird);

// P3
const capital = "Hanoi";
const continent = "Asia";

const vietnam = {
  capital,
  continent
};

// console.log(vietnam);

// P4
const wheelsCount = 4;
const doorsCount = 4;
const color = "black";

const car = {
  wheelsCount,
  doorsCount,
  color
};

// console.log(car);

/* Destructuring, Rest, Spread */
// P1
function getAverage({x, y, z}) {
    // let x = obj.x;
    // let y = obj.y;
    // let z = obj.z;
    console.log(x,y,z);
    return Math.floor((x + y + z) / 3.0); // CHANGE ME
}

// console.log(getAverage({ x: 3.6, y: 7.8, z: 4.3 }));

// P2
function getAddress({city, country, address}) {
    console.log({city, country, address});
    let { street } = address;
    return city === "HCMC" && country === "Vietnam" && street === "Ton Dan";
}

let data = {
    city: "HCMC",
    country: "Vietnam",
    address: {
    number: 12,
    street: "Ton Dan",
    district: "4",
    },
};

// console.log(getAddress(data));

// P3
function objectifyElements(arr) {
    const [first, second, third, , fourth] = arr;
    return { first, second, third, fourth }; // CHANGE ME
}

// console.log(objectifyElements([0, 1, 2, 3, 4, 5, 6, 7, 8]).fourth === 4);

// P4
function getFoodItems() {
    const food = [
      ["carrots", "beans", "peas", "lettuce"],
      ["apples", "mangoes", "oranges"],
      ["cookies", "cake", "pizza", "chocolate"],
    ];
    const carrots = food[0][0];
    const cookies = food[2][0];
    //const mangoes = food[1][1]; // CHANGE ME
    let [, [, mangoes]] = food;
    // console.log(mangoes);
    return { carrots, cookies, mangoes }; // CHANGE ME
}

// console.log(getFoodItems().mangoes === "mangoes");

// P5
function getHistoricPrices([index]) {
    const bingo = index; // CHANGE ME
    console.log(bingo);
    return bingo;
}

// console.log(getHistoricPrices2([true, false, true]));

// P6
function getHistoricPrices2([[index]]) {
    const bingo = index; // CHANGE ME
    return bingo;
}

// console.log(getHistoricPrices2([
//     [true, false],
//     [false, true],
// ]));

// P7
function getHistoricPrices3([[[index]]]) {
    const bingo = index; // CHANGE ME
    return bingo;
  }
  
// console.log(getHistoricPrices3([
//     [
//       [true, false],
//       [true, false],
//     ],
// ]));

// P8
function getHistoricPrices4([[[ {}, {x} ]]]) {
    const bingo = x;
    return bingo;
}

// console.log(getHistoricPrices4([[[ {}, {x: true} ]]]));

// also
// function getHistoricPrices4(index) {
//     const [[[, bingo]]] = index;
//     const {x} = bingo;
//     console.log(bingo);
//     console.log("this: " + x);
// }

// getHistoricPrices4([[[ {}, {x: true} ]]]);


/* Rest and Spread */
// P1
function restParams(first, ...rest) {
    // console.log(first, rest);
    return first === "first" && rest[0] === "second";
}

// console.log(restParams("first", "second")); // CHANGE ME

// P2
function restParams2(first, ...rest) {
    // console.log(first, rest);
    return first === "first" && rest[0] === "second" && rest[1] === "third";
}

// console.log(restParams2("first", "second", "third")); // CHANGE ME

// P3
function restParams3(first, ...rest) {
    return (
      first === "first" &&
      rest[0] === "second" &&
      rest[1] === "third" &&
      rest[2] === undefined
    );
  }
  
// console.log(restParams3("first", "second", "third")); // CHANGE ME

// P4
function restParams4(...rest) {
    // console.log(rest);
    return rest[0] === "first" && rest[1] === "second" && rest[2] === "third"; // CHANGE ME
}
  
// console.log(restParams4("first", "second", "third"));

// P5
function restParams5(...rest) {
    return rest[5]; // CHANGE ME
}
  
// console.log(restParams5(1, 2, 3, 4, 5, 6) === 6);

// P6
function findTheMax() {
    const arr1 = [1, 7, 2, 4];
    const arr2 = [1, 9, 5, 8];
    // console.log(...arr1, ...arr2);
    return Math.max(...arr1, ...arr2);
}

// console.log(findTheMax());

// P7
function concatenateArrays() {
    const arr1 = [0, 1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [7, 8, 9];
    const result = [...arr1, ...arr2, ...arr3];
    return result;
}

// console.log(concatenateArrays());

// P8
function mergeObjects() {
    // what does this return?
    const obj1 = {
      a: "a from obj1",
      b: "b from obj1",
      c: "c from obj1",
      d: {
        e: "e from obj1",
        f: "f from obj1",
      },
    };
    // console.log(obj1.a);
    const obj2 = {
      b: "b from obj2",
      c: "c from obj2",
      d: {
        g: "g from obj2",
        h: "h from obj2",
      },
    };
    // let tempD1 = obj1.d;
    // let tempD2 = obj2.d;
    // let d = {...tempD1, ...tempD2};
    // console.log(d);
    const result = { ...obj1, ...obj2, d: {...obj1.d, ...obj2.d} };
    console.log(result);
    // return (
    //     result.a === "a from ob1" &&
    //     result.b === "YOUR_ANSWER" &&
    //     result.c === "YOUR_ANSWER" &&
    //     result.d.e === "YOUR_ANSWER" &&
    //     result.d.f === "YOUR_ANSWER" &&
    //     result.d.g === "YOUR_ANSWER" &&
    //     result.d.h === "YOUR_ANSWER"
    // );
}

// console.log(mergeObjects());

/* Arrow Functions */
// P1
const divide = (a, b) => {
    // console.log(a, b);
    return a / b;
};

// console.log(divide(40, 10));

const multiArgument = () => {
    const divide = (a,b) => {
        return a / b;
    };
    return divide(40,10);
}

// console.log(multiArgument());

// P2
const asArray = (...args) => {
    // console.log(...args);
    return args;
}

// console.log(asArray(1, 2, 3, 4));

// P3
const withObject = () => {
    const getObject = (favouriteCandy) => {
        return { favouriteCandy };
    };
    return getObject("twix");
};

// console.log(withObject());

// P4
const withMultiLineExpression = () => {
    const getString = (name) => `Hello there ${name}, How are you doing today?`;
    return getString("Ryan");
};

// console.log(withMultiLineExpression());

// P5
function curryAdd() {
    const curryAddition = (a) => (b) => (c) => a + b + c;
    return curryAddition(9)(3)(5);
}

console.log(curryAdd());
