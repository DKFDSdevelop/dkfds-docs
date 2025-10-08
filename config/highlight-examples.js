const hljs = require('highlight.js');
const fs = require('fs');
const log = require("fancy-log");
const colors = require("ansi-colors");
const util = require('util');
util.inspect.styles.date = 'grey';

const DEBUG = false;

function restoreCode(str) {
    return str.replaceAll('<span class="hljs-name">', '')
        .replaceAll('<span class="hljs-attr">', '')
        .replaceAll('<span class="hljs-string">', '')
        .replaceAll('<span class="hljs-tag">', '')
        .replaceAll('<span class="hljs-comment">', '')
        .replaceAll('<span class="hljs-symbol">', '')
        .replaceAll('</span>', '')
        .replaceAll('&#x27;', '&#39;')
        .replaceAll('&lt;', '<')
        .replaceAll('&quot;', '"')
        .replaceAll('&gt;', '>')
        .replaceAll('&#39;', "'")
        .replaceAll('&amp;', '&');
}

function highlightCode(str) {
    let unexpectedCode = false;

    // Use highlight.js to add syntax highlighting.
    let highlightedCode = hljs.highlight(str, { language: 'xml' }).value;

    // Replace apostrophe as hexadecimal code with decimal code
    highlightedCode = highlightedCode.replaceAll('&#x27;', '&#39;');

    // Verify that the code wasn't modified in unexpected ways.
    const restoredCode = restoreCode(highlightedCode);
    if (str !== restoredCode) {
        unexpectedCode = true;
        if (DEBUG) {
            log(colors.green('EXPECTED:\n' + str));
            log(colors.red('UNEXPECTED\n' + restoredCode));
        }
    }
    if (unexpectedCode) {
        log(colors.yellow(`WARNING: Unexpected code changes found during syntax highlighting. Please inspect the generated code from highlight.js.`));
    }

    return highlightedCode;
}

log(colors.white('Started syntax highlighting...'));

fs.readdirSync('_includes/code-examples/').forEach(file => {
    const content = fs.readFileSync(`${'_includes/code-examples/'}/${file}`, 'utf8');
    const highlightedContent = highlightCode(content);
    fs.writeFileSync(`${'_includes/code-highlighted-examples/'}/${file}`, highlightedContent);
});

fs.readdirSync('_includes/code-examples-generated-html/').forEach(file => {
    const content = fs.readFileSync(`${'_includes/code-examples-generated-html/'}/${file}`, 'utf8');
    const highlightedContent = highlightCode(content);
    fs.writeFileSync(`${'_includes/code-highlighted-examples-generated-html/'}/${file}`, highlightedContent);
});

log(colors.green('Syntax highlighting done.'));
