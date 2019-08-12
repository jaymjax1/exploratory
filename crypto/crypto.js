const crypto = require('crypto')

function createPassword() {
    const password = 'deesunutsu'
    return crypto.createHash('md5').update(password,'utf8').digest('hex').toUpperCase();
}

console.log(createPassword());