
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}    

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = i => {
    return function(fare) {
        return fare * i
    }
}

const fareDoubler = function createFareMultipler(fare) {
    return fare * 2
}

const fareTripler = function createFareMultipler(fare) {
    return fare * 3
}

const selectDifferentDrivers = function (arrayOfDrivers, returnFirstTwoDrivers) {
     return returnFirstTwoDrivers(arrayOfDrivers);
}