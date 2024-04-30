String.prototype.customSplit = function (delimiter) {
    const res = [];
    let startIndex = 0;
    let foundIndex = this.indexOf(delimiter);

    while(foundIndex !== -1) {
        res.push(this.substring(startIndex, foundIndex));
        startIndex = foundIndex + delimiter.length;
        foundIndex = this.indexOf(delimiter, startIndex);
    }
    res.push(this.substring(startIndex));
    return res;
};

const str = "this is string";
console.log(str.customSplit(" "));
