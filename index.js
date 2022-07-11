function push(arr, item) {

     arr[arr.length] = item;
     return arr.length;

}


function pop(arr) {
    arr.length = arr.length - 1;
    return arr;

}
module.exports = { push, pop };
