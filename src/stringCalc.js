function add(input) {
    if(input === '' || input == null) return 0;
    return parseInt(input, 10);
}

module.exports = {add};