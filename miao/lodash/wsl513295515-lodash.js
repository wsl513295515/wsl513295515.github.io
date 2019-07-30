var wsl513295515 = {
  chunk: function(ary,length){
    var res = []
    var c = []
    for(var i = 0; i < ary.length; i++){
      if(c.length == length){
        res.push(c)
        c = []
      }
      c.push(ary[i])
    }
    if(c.length != 0){
      res.push(c)
    }
    return res
  },
  compact: function (ary) {
    return ary.filter(it => it)
  },
  // concat: function(){

  // },
  difference: function(ary,...values){
    var dif = [].concat(...values)
    return ary.filter(item => dif.indexOf(item) == -1)
  },
  // differenceBy: function(){
   
    
  // },
  // differenceWith: function(){

  // },
  drop: function(ary,n = 1){
    return ary.slice(n)
  },
  dropRight: function(ary, n = 1){
    if(n == 0){
      return ary
    }
    return ary.slice(0, - n)
  },
  // dropRightWhile: function(){
  
    
  // },
  // dropWhile: function(){
  
    
  // },
  fill: function(ary = [], value ,start = 0 ,end = ary.length){
    for(var i = start; i < end; i++){
      ary[i] = value
    }
    return ary
  },
  // findIndex: function(){

  // },
  // findLastIndex: function(){

  // },
  flatten: function(ary){
    return ary.reduce((a,b) => a.concat(b),[])
  },
  head: function(ary){
    return ary[0]
  },
  indexOf: function(ary, value, from = 0){
    for(var i = from; i < ary.length; i++){
      if(ary[i] == value){
        return i
      }
    }
    return -1
  },
























  // filter: function(){

  // },
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
      f(array[i], i, array)
    }
  },
  reduce: function(ary,reducer,initialVal = 0){
    for(var i in ary){
      initialVal = reducer(initialVal, ary[i], i, ary)
    }
    return initialVal
  }, 
  max: function(){
    var max = -Infinity
    for(var i = 0; i < arguments.length; i++){
      if(arguments[i] > max){
        max = arguments[i]
      }
    }
    return max
  },
  keyBy: function(ary,key){
    return ary.reduce((result, item) => {
      return result[item[key]] = item
    }, {})
    return result
  },
  every: function(ary,predicate){
    for(var i = 0; i < ary.length; i++){
      if( ! predicate(ary[i], i, ary)){
        return false
      }
    }
    return true
  },
  isArray: function(value){
    return Object.prototype.toString.call(value) == '[object Array]'
  },
  isFunction: function(value){
    return Object.prototype.toString.call(value) == '[object Function]'
  },
  isNumber: function(value){
    return Object.prototype.toString.call(value) == '[object Number]'
  },
}
