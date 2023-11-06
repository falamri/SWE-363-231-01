const fs = require('fs');
const path = require('path');

// Check command-line arguments
if (process.argv.length !== 4) {
    console.error('Usage: node fileCount.js <sourceDirectory> <targetDirectory>');
    process.exit(1);
}

const sourceDirectory = process.argv[2];
const targetDirectory = process.argv[3];

// Read the source directory
fs.readdir(sourceDirectory, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        process.exit(1);
    }

    // Filter for specific file extensions (e.g., .txt, .jpg)
    const allowedExtensions = ['.txt', '.jpg'];
    const matchingFiles = files.filter((file) => {
        const ext = path.extname(file);
        return allowedExtensions.includes(ext);
    });

    console.log(`Matching files in ${sourceDirectory}: ${matchingFiles.join(', ')}`);

    // Copy the filtered files to the target directory
    matchingFiles.forEach((file) => {
        const sourceFilePath = path.join(sourceDirectory, file);
        const targetFilePath = path.join(targetDirectory, file);

        fs.copyFile(sourceFilePath, targetFilePath, (copyError) => {
            if (copyError) {
                console.error(`Error copying ${file}: ${copyError}`);
            } else {
                console.log(`Copied ${file} to ${targetDirectory}`);
            }
        });
    });
});
