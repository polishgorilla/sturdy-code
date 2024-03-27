  return function (sets) {
      result = [];
      cartesianProduct(sets, 0, []);
      return result;
    };
  }());

  exports.cartesianProduct = cartesianProduct;

}((typeof window === 'undefined') ? module.exports : window));


  var combinations = (function () {
    var res = [];

    function combinations(arr, k, start, idx, current) {
      if (idx === k) {
        res.push(current.slice());
        return;
      }
      for (var i = start; i < arr.length; i += 1) {
        current[idx] = arr[i];
        combinations(arr, k, i + 1, idx + 1, current);
      }
    }
//good
