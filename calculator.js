
function add(stringNumbers) {

    let sum = 0;
    var delimeter = /[,\n]/;
    var numbers = stringNumbers.split(delimeter);


    if (stringNumbers.substring(0, 2) === '//') {
        delimeter = stringNumbers.substring(2, stringNumbers.indexOf('\n'));
        let nums = stringNumbers.substring(stringNumbers.indexOf('\n') + 1);
        numbers = nums.split(delimeter);
    }


    numbers.forEach(item => {
        var number = parseInt(item);

        if (isNaN(number) || number > 1000) { number = 0; }

        if (number < 0) { throw 'negative numbers not allowed'; }

        sum += number;
    });


    return sum;

}

module.exports = add;