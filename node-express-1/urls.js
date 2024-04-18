const fs = require('fs');
const http = require('http');
const https = require('https');
const urlModule = require('url');

const [filename] = process.argv.slice(2);

if (!filename) {
    console.error('Usage: node urls.js FILENAME');
    process.exit(1);
}

function httpModule(url) {
    return url.startsWith('https') ? https : http;
}

function fetchAndSave(url) {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;
    const protocol = httpModule(url);

    protocol.get(url, response => {
        let data = '';
        response.on('data', chunk => {
            data += chunk;
        });
        response.on('end', () => {
            fs.writeFile(hostname, data, err => {
                if (err) {
                    console.error(`Couldn't write to file ${hostname}: ${err.message}`);
                } else {
                    console.log(`Wrote to ${hostname}`);
                }
            });
        });
    }).on('error', error => {
        console.error(`Couldn't download ${url}: ${error.message}`);
    });
}

try {
    const urls = fs.readFileSync(filename, 'utf8').split('\n').filter(Boolean);
    urls.forEach(url => {
        fetchAndSave(url);
    });
} catch (error) {
    console.error(`Couldn't read file ${filename}: ${error.message}`);
    process.exit(1);
}
