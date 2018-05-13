function sortArray(input) {
    console.log(input
        .sort()
        .sort((a, b) => a.length > b.length)
        .join('\n'));
}