const funToTest = {
    returnHello: () => 'Hello',
    addTwoNum: (num1, num2) => {  
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return null;
        }
        return num1 + num2;
    }
}   

module.exports = funToTest;