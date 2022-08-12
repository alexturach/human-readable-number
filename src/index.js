const numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const teens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const hundred = 'hundred';

module.exports = function toReadable(number) {
    const arr = String(number).split('');
    if (number === 0) {
        return 'zero';
    } else if (number < 20) {
        return numbers[number];
    } else if (number < 100) {
        return (teens[arr[0]] + ' ' + numbers[arr[1]]).trim();
    } else if (number < 1000) {
        const sliceNumber = Number(String(number).slice(1));
        if (sliceNumber < 20) {
            return (numbers[arr[0]] + ' ' + hundred + ' ' + numbers[sliceNumber]).trim();
        } else {
            return (numbers[arr[0]] + ' ' + hundred + ' ' + teens[arr[1]] + ' ' + numbers[arr[2]]).trim();
        }
    }
}
