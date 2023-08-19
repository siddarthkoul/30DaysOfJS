var map = function(arr, fn) {
    return arr.map((element, index) => fn(element, index));
};