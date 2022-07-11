function push(arr, item) {

     arr[arr.length] = item;
     return arr.length;

}


function pop(arr) {
    const last = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return last;

}
module.exports = { push, pop };
