// 1) Write a function splitAndMerge


function splitAndMerge(str, sp) {
    let a = str.split(' ')
        .map(str => str.split(''));
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            arr.push(a[i][j]);
        }
    }
    return arr.join(sp);
}

// 2) Write a function convert


function convert(obj) {
    console.log(Object.entries(obj));
}

convert({ name: 'Jeremy', age: 24, role: 'Software Engineer' });



// 4) Write a function that takes a sentence (string) and reverses each word in the sentence.

function reverseSentence(str) {

    return str.split(' ')
        .map(str => str.split('').reverse().join(''))
        .join(' ');
}
console.log(reverseSentence('A fun little challenge!'));


// 5) Write a function stringExpansion


function stringExpansion(str) {
    return str.replace(/([0-9]{1}[a-zA-Z]{1})/g,
        str => {
            if (str.length > 1)
                return str[1].padEnd(str[0], str[1]);
            else
                return str;
        }
    ).replace(/\d+/g, '');
}

console.log(stringExpansion('5r52jsm2w'));