const fs = require('fs');

const file = process.argv[2];


fs.readFile(file, (err, data) => {
    if(err){
        console.log(err);
        return
    }
    let result = data.toString().split('\n').length - 1;
    console.log(result)
});