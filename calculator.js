
function add(stringNumbers) {

    let sum = 0;
    let numbers = stringNumbers.split(/[,\n]/);

    numbers.forEach(item => {
        let number = parseInt(item);

        if (isNaN(number)) {
            number = 0;
        }

        sum += number;
    });


    return sum;

}

module.exports = add;