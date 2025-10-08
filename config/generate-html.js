const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const beautify = require('js-beautify').html;

// https://www.npmjs.com/package/js-beautify#css--html
const BEAUTIFY_OPTIONS = { 
    indent_size: 4,
    unformatted: [],
    preserve_newlines: true,
    indent_inner_html: true,
    inline: ['use']
};

const srcDir = '_includes/code-examples';
const destDir = '_includes/code-examples-generated-html';

const dom = new JSDOM(`<!DOCTYPE html><head></head><body></body>`);
const window = dom.window;
const document = window.document;
const body = document.body;
const { HTMLElement } = window;

global.HTMLElement = window.HTMLElement;
global.document = window.document;
global.window = window;
global.customElements = dom.window.customElements;
global.Event = window.Event;

const DKFDS = require('dkfds');
DKFDS.initCustomElements();

fs.readdirSync(srcDir).forEach(file => {
    const content = fs.readFileSync(`${srcDir}/${file}`, 'utf8');
    body.innerHTML = content;
    const beautifiedContent = beautify(body.innerHTML, BEAUTIFY_OPTIONS);
    fs.writeFileSync(`${destDir}/${file}`, beautifiedContent);
});

process.on('exit', () => {
  console.log(`Files created in ${destDir}`);
});