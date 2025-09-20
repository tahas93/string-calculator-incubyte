function escapeForRegex(s) {
    // googled for regex to escape speical chars.
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function add(input) {
    if(!input) return 0;
    
    let numPart = input;
    let delimiterRegx = /,|\n/;

    if(numPart.startsWith('//')) {
        const newLineInd = numPart.indexOf('\n');
        const def = numPart.substring(2, newLineInd);
        numPart = numPart.substring(newLineInd + 1);
        delimiterRegx = new RegExp(`${escapeForRegex(def)}|,|\\n`);
    }

    const eles = numPart.split(delimiterRegx);
    const nums = eles.map(i => parseInt(i,10));

    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) throw new Error('negative numbers not allowed : ' + negatives.join(','));

    return nums.reduce((a,b) => a + b, 0);
}

module.exports = {add};