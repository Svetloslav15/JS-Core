function aggregateTable(input) {
    let sum = 0;
    let towns = [];
    for (let index = 0; index < input.length; index++) {
       let temp = input[index].split('|').filter(x => x !== '');
       towns.push(temp[0].trim());
       sum += Number(temp[1].trim());
    }
    console.log(towns.join(', '));
    console.log(sum);
}
aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)