/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */
let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

function result(numbers) {
    let tmp = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if (tmp < numbers[i]) {
            tmp = numbers[i]
        }
    }
    return tmp
}

console.log(result(numbers));

