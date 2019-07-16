var wsl513295515 = {
  compact: function (ary) {
    return ary.filter(it => it)
  },
  flip: function (func) {
    return function(...args) {
      return func(...args.reverse())
    }
  },
  
}
