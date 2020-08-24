

var fs = require('fs')
var readline = require('readline')

//
// process.argv[2] = file name
//
// process.argv[3] = search term
let fileName = process.argv[2]
let searchTerm = process.argv[3]
fs.readFile(fileName, 'utf8', (err, data) => {
    
    let js = JSON.parse(data)
    js.forEach( item => {
        if (item.name.toLowerCase().indexOf(searchTerm) != -1) {
            console.log("--->",  item.name)
        } 
        if (item.description.toLowerCase().indexOf(searchTerm) != -1) {
            console.log("--->",  item.name)
        } 
        

    })
    console.log(js.length)
})

//

// the raw input file needs to have the first line and the last few lines removed
//
// // console.log("process.argv-->", process.argv, process.argv.length)
// if (process.argv.length < 3) {
//     console.log("usage: convert fileName")
//     return
// }
// let fileIn = process.argv[2]
// let j = 0
// // console.log("file in-->", fileIn)

// const readInterface = readline.createInterface({
//     input: fs.createReadStream(fileIn),

//     console: false
// })


// readInterface.on('line', function (line) {
    
//     // let args = line.split(' ')
//     // args = line.slice(20)
//     // console.log(`on line ${j}`)
//     // let js = JSON.parse(args)
//     // console.log(JSON.stringify(js[0], null, 2), JSON.stringify(js[1], null, 2))
//     console.log(line)
//         j++

// })