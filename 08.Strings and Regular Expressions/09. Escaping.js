function escaping(input) {
    let result = "<ul>\n";
    for (let item of input) {
        result += '   <li>' + escapeChars(item) + '</li>\n';
    }
    result += '</ul>';
    console.log(result);

    function escapeChars(input) {
        return input
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}