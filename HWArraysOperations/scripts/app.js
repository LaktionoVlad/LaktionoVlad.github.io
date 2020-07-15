var printArray = document.querySelector('.printNewArray');
var report = document.querySelector('.reports');
var newValue = document.querySelector('.newValue');
var mainFunctions = document.querySelectorAll('.mainFunctions');
var adding = document.querySelector('.adding').childNodes;
var deleting = document.querySelector('.deleting').childNodes;
var sorting = document.querySelector('.sorting').childNodes;
var iterations = document.querySelector('.iterations').childNodes;
var res = document.querySelector('.res');
var temp = '';
var tmp = '';
var t = '';
var sum = 0;
var ar1 = [];
var NUMBERS = 10;
var MIN = 1;
var MAX = 50;

function fillArray(array, numbers){
    for (var i = 0; i < numbers; i++){
        array[i] = randomNumber(MIN, MAX);
    }
}

function randomNumber(min, max){
    return min + Math.round(Math.random()*(max-min));
}

function createArray(){
    reset();
    fillArray(ar1, NUMBERS);
    printArray.textContent = ar1.toString();
    mainFunctions.forEach(unHidden);
    res.hidden = false;
}

function unHidden(value, index, array) {
    value.hidden = false;
}

function operationAdding() {
    adding.forEach(unHidden);
}

function operationDeleting(){
    deleting.forEach(unHidden);
}

function operationSorting(){
    sorting.forEach(unHidden);
}

function operationIterations(){
    iterations.forEach(unHidden);
}

function changeValue() {
    newValue.textContent = ar1.toString();
}

function addAtEnd() {
    temp = randomNumber(MIN, MAX);
    ar1.push(temp);
    changeValue();
    report.textContent = 'The number ' + temp + ' was added to index ' + (ar1.length-1);
}

function addAtBeginning() {
    temp = randomNumber(MIN, MAX);
    ar1.unshift(temp);
    changeValue();
    report.textContent = 'The number ' + temp + ' was added to index 0';
}

function addAtMiddle() {
    temp = randomNumber(MIN, MAX);
    tmp = randomNumber(0, ar1.length-1);
    ar1.splice(tmp, 0, temp);
    changeValue();
    report.textContent = 'The number ' + temp + ' was added to index ' + tmp;
}

function updateArray() {
    temp = randomNumber(MIN, MAX)
    tmp = randomNumber(0, ar1.length - 1);
    t = ar1[tmp];
    ar1.splice(tmp,1,temp);
    changeValue();
    report.textContent = 'In index ' + tmp + ' value ' + t + ' has changed to value ' + temp;
}

function delFromEnd() {
    temp = ar1[ar1.length-1];
    ar1.pop();
    changeValue();
    report.textContent = 'The number ' + temp + ' was removed from index ' + (ar1.length-1);
}

function delFromBeginning() {
    temp = ar1[0];
    ar1.shift();
    changeValue();
    report.textContent = 'The number ' + temp + ' was removed from index 0';
}

function delFromMiddle() {
    tmp = randomNumber(0, ar1.length - 1);
    temp = ar1[tmp];
    ar1.splice(tmp, 1);
    changeValue();
    report.textContent = 'The number ' + temp + ' was removed from index ' + tmp;
}

function slicing() {
    tmp = randomNumber(0, ar1.length/2-1);
    temp = randomNumber(ar1.length/2, ar1.length - 1);
    var ar2 = ar1.slice(tmp, temp);
    newValue.textContent = ar2.toString();
    report.textContent = 'The value from index ' + tmp + ' to index ' + (temp-1) + ' has been moved to the new array.'
}

function ascendingSort() {
    ar1.sort(function (a, b) {
        return a-b;
    })
    changeValue();
    report.textContent = 'Ascending Sorting';
}

function descendingSort() {
    ascendingSort();
    ar1.reverse();
    changeValue();
    report.textContent = 'Descending Sorting';
}

function sumArrNumbers(value,index, array) {
    sum += ar1[index];
}

function sumAllNumbers() {
    ar1.forEach(sumArrNumbers);
    newValue.textContent = sum;
    report.textContent = 'Sum of all array numbers';
    sum = 0;
}

function ifNumMore() {
    temp = randomNumber(MIN, MAX);
    var ar2 = ar1.filter(function (value, index, array) {
        return value>temp;
    })
    newValue.textContent = ar2.toString();
    report.textContent = 'Display all numbers that are greater than ' + temp;
}

function reset() {
    ar1 = [];
    ar2 = [];
    mainFunctions.forEach(hidden);
    adding.forEach(hidden);
    deleting.forEach(hidden);
    sorting.forEach(hidden);
    iterations.forEach(hidden);
    newValue.textContent = '';
    printArray.textContent = '';
    res.hidden = true;
    temp = '';
    tmp = '';
    sum = 0;
    report.textContent = '';
}

function hidden(value) {
    value.hidden = true;
}