
exports.min = function min(array) {
  if (!array || array.length == 0) return 0;
  if (array.length > 1 && array != undefined) {
    array = array.sort((a, b) => a - b);
    return array[0];
  }

}

exports.max = function max(array) {
  if (!array || array.length == 0) return 0;
  if (array.length > 1 && array != undefined) {
    array = array.sort((a, b) => a - b);
    return array[array.length - 1];
  }


}

exports.avg = function avg(array) {
  if (!array || array.length == 0) return 0;
  if (array.length > 1 && array != undefined) {
    let result = array.reduce((prev, item) => prev + item) / array.length;
    return result;
  }

}
