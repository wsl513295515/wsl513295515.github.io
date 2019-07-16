var wsl513295515 = {
  compact: function (ary) {
    return ary.filter(it => it)
  },
  flip: function (func) {
    return function(...args) {
      return func(...args.reverse())
    }
  },
  before: function(n, func){
    var times = 0
    return function(...args){
      times++
      if(times < n){
        return lastResult == func(...args)
      }else{
        return lastResult
      }
    }
  },
  unary: function(f){
    return ary(f,1)
  },
  spread: function (f){
    return function(ary){
      return f.apply(null,ary)
    }
  },
  filter: function(array,f){
    var psssed = []
    for(var i = 0; i < array.length; i++){
      if(f(array[i],i,array)){
        passed.push(array[i])
      }
    }
    return psssed
  },
  forEach: function(array,f){
    for(var i = 0; i < array.length; i++){
      return f(array[i], i, array)
    }
  }
}
