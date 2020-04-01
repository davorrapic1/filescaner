const fs = require('fs');


const folder = './folder';

const files = fs.readdirSync(folder);


readFolder(files, folder);





function readFolder(fileArr, folderName) {
    fileArr.forEach(file => {

        var testArr = file.split('.');

        if (testArr.length === 1) {

            tempFolderName = `${folderName}/${file}`;
            const newFolderArr = fs.readdirSync(`${tempFolderName}`);
            readFolder(newFolderArr, `${tempFolderName}/${newFolderArr}`);
            return;
        }

        if (testArr[testArr.length - 1] === 'jpg' || testArr[testArr.length - 1] === 'png') {
            console.log(`We have a path to the image: ${folderName}`)
            return;
        }


        if (testArr[testArr.length - 1] === 'json') {

            var jsdonBuffer = fs.readFileSync(`${folderName}`);
            var jsonFile = JSON.parse(jsdonBuffer);
            var keyArray = Object.keys(jsonFile.gallery);
            keyArray.forEach(item => {

                images = jsonFile.gallery[item];

                images.forEach(image => console.log(image.url))
            })
            return;
        }


        console.log(`this is a unknown file ${file}`);
    });

}