function convert(num) {
    let foot = num / 12;
    let feet = num % 12;
    console.log(`${parseInt(foot)}'-${feet}"`)
}