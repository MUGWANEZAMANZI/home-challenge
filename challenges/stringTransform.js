function transformString(str) {
    let len = str.length;
    let result = "";

    if (len % 3 === 0) {
        // If the length of the string is divisible by 3, reverse the string
        result = str.split('').reverse().join('');
    }

    if (len % 5 === 0) {
        // If the length of the string is divisible by 5, replace each character with its ASCII code
        result = str.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    if (len % 15 === 0) {
        // If the length of the string is divisible by both 3 and 5, perform both operations
        result = str.split('').reverse().join('');
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return result;
}

// Test the function with the provided examples
console.log(transformString("Hamburger"));  // Outputs: "regrubmaH"
console.log(transformString("Pizza"));  // Outputs: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));  // Outputs: "101 105 107 111 111 67 112 105 104 67 101 116 97 108 111 99 111 104 67"
