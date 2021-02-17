module.exports = function toReadable (number) {
    let values = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    if(values[number]) return values[number];
    number = String(number).split('');
    if(number.length == 2) return twoDigit(number, values);
    if(number.length == 3) return threeDigit(number, values)

    function twoDigit(number, values){
        if(values[number[0] + '0']) return values[number[0] + '0'] + ' ' + values[number[1]]
        else return values[number[1]];
    }

    function threeDigit(number, values){
        let str = '';
        str += values[number[0]] + ' hundred';
        number.splice(0,1);
        number = number.join('');
        if(values[number]) return str + ' ' + values[number];
        else if(number != '00') return str + ' ' + twoDigit(number, values);
        return str
    }
}
