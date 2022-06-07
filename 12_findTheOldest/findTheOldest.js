const findTheOldest = function(people) {
    const sorted = people.sort(function(a,b) {
        let aAge = 0;
        let bAge = 0;
        if (!a.hasOwnProperty('yearOfDeath'))
        {
            let today = new Date();
            aAge = today.getFullYear() - a.yearOfBirth;
        }
        else
        {
            aAge = a.yearOfDeath - a.yearOfBirth;
        }
        if (!b.hasOwnProperty('yearOfDeath'))
        {
            let today = new Date();
            bAge = today.getFullYear() - b.yearOfBirth;
        }
        else
        {
            bAge = b.yearOfDeath - b.yearOfBirth;
        }
        if (aAge < bAge)
        {
            return 1;
        }
        else
            return -1;
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
