var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/

//exercise.maxEarnings = function() {

/* EX 1

replace the for loop with one of the array callback functions
first create an array of total earnings with overtime

*/

/*
    var currentMax = 0.0;
    var people = exercise.data.data;
    var dataLength = people.length;
    var currentSal;

    for (var i = 0; i < dataLength; i++) {
        currentSal = Number(exercise.data.data[i][18]);
        if (currentMax < currentSal) {
            currentMax = currentSal;
        }
    }

    return currentMax;
};
*/
/* EX 1

this gives you an example for the above
you still need to write the functions getEarnings and findMax
*/

exercise.maxEarnings = function () {
    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var currentMax = earnings.reduce(findMax, 0);
    return currentMax;
};


function getEarnings(people) {
    return Number(people[18]);
}

function findMax(previous, current) {
    if (current >= previous) previous = current;//find the max 
    return previous;
}


exercise.earningsAbove = function (target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */

    var num_salaraies = 0;
    var people = exercise.data.data; // get handle on data
    var earnings = people.map(getEarnings);
    var target_salaries = earnings.filter(function (earnings) {
        var comparison = earnings >= target;//return ture if earnings >= target
        return comparison;
    })
    num_salaraies = target_salaries.length;
    return num_salaraies;
};

function getBasePayroll(people) {
    return Number(people[11]);
}

exercise.totalBasePayroll = function () {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var people = exercise.data.data; // get handle on data
    var BasePayroll = people.map(getBasePayroll);
    var totalBasePayroll = BasePayroll.reduce(function (previous, current) {
        previous += current;
        return previous;
    }, 0);
    return Math.floor(totalBasePayroll);



};

exercise.totalEarningsWithOvertime = function () {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var people = exercise.data.data; // get handle on data
    var earnings = people.map(getEarnings);
    var totalEarningsWithOvertime = earnings.reduce(function (previous, current) {
        previous += current;
        return previous;
    }, 0);
    return Math.floor(totalEarningsWithOvertime);


};

function getzipCodes(people) {
    return Number(people[19]);
}

exercise.numberUniqueZipCodes = function () {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    // var zipCodes = [];
    var people = exercise.data.data; // get handle on data
    var allzipCodes = people.map(getzipCodes);
    var zipCodes = allzipCodes.reduce(function (previous, current) {

            if (current in previous) {
                previous[current] += 1;//counting the numbers of repitive zipcodes.
            }
            else {
                previous[current] = 1;//
            }

        return previous;

    }, {})

    return Object.keys(zipCodes).length;//return the unique zipcodes
};