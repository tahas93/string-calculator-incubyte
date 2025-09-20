function add(input) {
    if(!input) return 0;
    if(!input.includes(',')) return parseInt(input, 10);

    const eles = input.split(',');
    const nums = eles.map(i => parseInt(i,10));
    return nums.reduce((a,b) => a + b, 0);
}

module.exports = {add};