console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function print0dds(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }    
    }
}

//print0dds(20);
//print0dds(60);
print0dds(100);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age, name = "youngin") {
    if (age >= 16) {
        console.log(`Congrats ${name} you're old enough to drive`);
    } else {
        console.log(`You have to wait ${16 - age}, sorry ${name}`);
    }
}

checkAge(15, "Ellsa");
checkAge(18);

// Exercise 3
 console.log("EXERCISE 3: \n=============\n");
function pointLocation(x, y) {
    if (y == 0 || x == 0) {
        if (y == 0 && x == 0) {
        console.log(`That's the origin`);
    } else if (x == 0) {
        console.log(`That's on the x axis`);
    } else if (y == 0){
        console.log(`That's on the y axis`);
    }
    } else {
        if (x > 0 && y > 0) {
            console.log(`Located in Quadrant 1`);
        } else if (x > 0 && y < 0) {
            console.log(`Located in Quadrant 2`);
        } else if (x < 0 && y < 0) {
            console.log(`Located in Quadrant 3`);
        } else if (x < 0 && y > 0) {
            console.log(`Located in Quadrant 4`);
        }
    }  
}

pointLocation(0, 1);
pointLocation(1, 0);
pointLocation(0, 0);
pointLocation(1, 1);
pointLocation(1, -1);
pointLocation(-1, -1);
pointLocation(-1, 1);

// Exercise 4
console.log("EXERCISE 4: \n============\n");

function theTriangle(sideA, sideB, sideC) {
    if (sideA + sideB > sideC) {
        console.log("Valid Triangle");
        // type of Triangle
        if(sideA == sideB && sideA == sideC) {
            console.log("Equilatreral Triangle");
        } else if (sideA == sideB || sideB == sideC || sideA == sideC) {
            console.log("Isosceles Triangle");
        } else {
            console.log("Scalene Triangle");
        }
    } else {
        console.log("Invalid Triangle");
    }
}


theTriangle(4, 5, 3);
theTriangle(3, 3, 3);
theTriangle(2, 2, 3);
theTriangle(5, 3, 5);

// Exercise 5
console.log("EXERCISE 5: \n===============\n");

const dataReport = (dataLimit, day, usage) => {
    const cycleLength = 30;
    let avgDailyUse = usage / day;
    let feedback = "";

    let output = `${day} day(s) used, ${cycleLength - day} day(s) remaining
    Average daily use: ${avgDailyUse} GB/day
    You are ${feedback} your average daily use (${avgDailyUse} GB/day), 
    continuing this high usage, you'll exceed your data plan by <tbd> GB.
    To stay below your data plan, use no more than <tbd> GB/day.`

    console.log(output);
}

dataReport(55, 5, 4);
dataReport(60, 20, 10)