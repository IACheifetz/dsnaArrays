function push(arr, item) {

     arr[arr.length] = item;
     return arr.length;

}


function pop(arr) {
    const last = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return last;

}

function unshift(arr, item) {
    for (let i = arr.length; i >= 0; i--) {
        arr[i] = arr[i - 1]; 
        console.log(arr);
    }
    arr[0] = item;
    return arr.length;

}
module.exports = { push, pop, unshift };
