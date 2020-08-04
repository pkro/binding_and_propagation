(function (window) {
  function $f() {}

  $f.prototype.hello = function () {
    console.log('hello');
  };
  window.$f = $f;
})(window);
