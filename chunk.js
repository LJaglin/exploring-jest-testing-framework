const chunkArr = (arr, len) => {
    const chunkedArr = [];

    arr.forEach((val, ind) => {
        const last = chunkedArr[chunkedArr.length - 1];
        if (!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }

    });
    return chunkedArr;
};

module.exports = chunkArr;