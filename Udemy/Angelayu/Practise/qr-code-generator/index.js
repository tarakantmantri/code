import inquirer from 'inquirer';
import qr from "qr-image"
import fs from "fs"
inquirer
    .prompt([
        {
            message: "type Your URL",
            name: "URL"
        }
    ])
    .then((answers) => {
        const url = answers.URL
        var qrimage = qr.image(url);
        qrimage.pipe(fs.createWriteStream("Qr_Code.png"));

        fs.writeFile("QR_code.txt", url, (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
                console.log("The written has the following contents:");
                console.log(fs.readFileSync("QR_code.txt", "utf8"));
            }
        });

    })
    .catch((error) => {
        if (error.isTtyError) {

        } else {
            // Something else went wrong
        }
    });