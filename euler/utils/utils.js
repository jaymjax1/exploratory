exports.timer = function(func) {
    console.time('function')
    console.log('starting...')
    console.log(func());
    console.timeEnd('function')/1000;
}

    
exports.logger = function(num) {
    process.stdout.write(`Progress: ${num} \n`)
}

exports.isPrime = function(num) {
    return getFactors(num).length === 2
}

const getFactors = function(num) {
    const factors = []
    for (let i = 1; i<=Math.sqrt(num); i++) {
        if (num%i === 0) {
            factors.push(i)
            factors.push(num/i)
        }
    }
    return [...new Set(factors)];
}