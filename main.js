// console.log('hui v shtanax')
//
// console.log(__dirname)
//
// console.log(__filename)
// require('./helpers/helper.js')

const readline = require('node:readline')

const foo = async  () => {
    const rlInstance =  readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rlInstance.question('what is ur name ?' + ' ', (name) => {
        console.log(`Hello ${name}`)
        rlInstance.close()
    })
}

void foo()
