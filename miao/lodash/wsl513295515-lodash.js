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
  differenceBy: function(ary, ...values){
    var f = values.pop()
    if(wsl513295515.isArray(f)){
      values.push(f)
      return wsl513295515.difference(ary, ...values)
    }else if(wsl513295515.isFunction(f)){
      values = wsl513295515.flattenDeep(values).map(f)
      return wsl513295515.difference(ary, ...values)
    }else{
      
    }
  },
  // differenceWith: function(){

  // },
  drop: function(ary, n = 1){
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
  flattenDeep: function(ary){
    var a = []
    for(var i = 0; i < ary.length; i++){
      if(ary[i] instanceof Array){
        var arys = this.flattenDeep(ary[i])
        a.push(...arys)
      }else{
        a.push(ary[i])
      }
    }
    return a
  },
  flattenDepth: function(ary, depth = 0){
    var a = []
    for(var i = 0; i < ary.length; i++){
      if(ary[i] instanceof Array && depth > 0){
        depth--
        var arys = this.flattenDepth(ary[i],depth)
        a.push(...arys)
      }else{
        a.push(ary[i])
      }
    }
    return a
  },
  // fromPairs: function(pairs){

  // },
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
  initial: function(ary){
    ary.pop()
    return ary
  },
  intersection: function(...arys){
    var map = {}
    var res = []
    for(key in arys[0]){
      map[arys[0][key]] = 1
    }
    for(var i = 1; i < arys.length; i++){
      for(var j = 0; j < arys[i].length; j++){
        if(arys[i][j] in map){
          map[arys[i][j]] += 1
        }
      }
    }
    for(key in map){
      if(map[key] == arys.length){
        res.push(map[key])
      }
    }
    return res
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
  filter: function(array,f = wsl513295515.identity()){
    var passed = []
    for(var i = 0; i < array.length; i++){
      if(f(array[i],i,array)){
        passed.push(array[i])
      }
    }
    return passed
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
  isMatch: function(object, source){
    if(object == source){
      return true
    }
    for(key in source){
      if(typeof source[key] == 'object' && source[key] != null){
        if(!this.isMatch(object[key],source[key])){
          return false
        }
      }else{
        if(object[key] != source[key]){
          return false
        }
      }
    }
    return true
  },
  isNumber: function(value){
    return Object.prototype.toString.call(value) == '[object Number]'
  },
  isString: function(value){
    return Object.prototype.toString.call(value) == '[object String]'
  },
  identity: function(...value){
    return value[0]
  },
  matches: function(src){
    return function(obj){
      return wsl513295515.isMatch(obj, src)
    }
    // 或者:
    // var match = src => bind(this.isMatch, null, window, src)
    // function bind(f, thisArg, ...fixedArgs){
    //   return function(...args){
    //     var acturalArgs = [...fixedArgs]
    //     for(var i = 0; i < acturalArgs.length; i++){
    //       if(acturalArgs[i] === window){
    //         acturalArgs[i] = args.shift()
    //       }
    //       acturalArgs.push(...args)
    //       return f(...acturalArgs)
    //     }
    //   }
    // }
  }
}
