// 1) Write a function splitAndMerge


function splitAndMerge(str, sp) {
    return str.split(' ')
        .map(str => str.split(''))
        .map(str => str.join(sp))
        .join(' ');
}
splitAndMerge("My name is John", " ");
splitAndMerge("Hello World!", ",")

// 2) Write a function convert


function convert(obj) {
    console.log(Object.entries(obj));
}

convert({ name: 'Jeremy', age: 24, role: 'Software Engineer' });

// 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.


function toCamelCase(str) {
    return str.split(/-|_/)
        .map(capitalizeFirstLetter)
        .join('');
}

function capitalizeFirstLetter(str, index) {
    if (index >= 1)
        return str.charAt(0).toUpperCase() + str.substr(1);
    else
        return str;
}
console.log(toCamelCase("the-stealth_warrior"));

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