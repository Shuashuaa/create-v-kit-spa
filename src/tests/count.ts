const fs = require('fs');
const path = require('path');

export async function countItems(dirPath: string) {
    let count = 0;

    const files = await fs.promises.readdir(dirPath);

    for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stat = await fs.promises.stat(filePath);   

        if (stat.isDirectory()){
            count += await countItems(filePath); // Recursive
        }else if (stat.isFile()) {
            count++;
        }
    }
    return count;
}

const sourcePath = path.join(__dirname, '../../templates', '158');

countItems(sourcePath)
.then((count) => {
    console.log(`There are ${count} items (files and folders) in the folder.`);
})
.catch((err) => {
    console.error('Error:', err);
});

