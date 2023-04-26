function isLeapYear(year) {
    var leapYear = true;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                leapYear = true;
            } else {
                leapYear = false;
            }
        } else {
            leapYear = false;
        }
    } else {
        leapYear = false;
    }
    if (leapYear === true) {
        console.log(year + " is a Leap Year!");
    } else {
        console.log(year + " is NOT a Leap Year!")
    }
}

isLeapYear(2000);
