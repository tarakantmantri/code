const fs = require('fs');

const fname = process.argv[2] || 'project'
// console.log(fs)
// fs.mkdir('test1', { recursive: true }, (err) => {
//     console.log('print when its done but i am first')
//     if (err) throw err;
// })
try {
    fs.mkdirSync(fname);
    fs.writeFileSync(`${fname}/index.html`)
    fs.writeFileSync(`${fname}/app.js`)
    fs.writeFileSync(`${fname}/style.css`)
} catch (e) {
    console.log("something went wrong")
    console.log(e)
}