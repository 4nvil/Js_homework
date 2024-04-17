function pad(str, char, times, addToStart) {
    if (str.length >= times) {
        return str;
    }

    let padding = char.repeat(times - str.length);

    if (addToStart) {
        return padding + str;
    } else {
        return str + padding;
    }
}

console.log(pad('qwerty', '+', 6, true));
console.log(pad('qwerty', '+', 6, false));