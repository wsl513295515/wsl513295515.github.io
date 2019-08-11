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
  differenceBy: function(array, ...values){
    let iteratee = this.last(values)
    if(this.isArrayLikeObject(iteratee)){
      iteratee = undefined
    }
    values = this.flattenDeep(values)
    const result = []
    const valuesLength = values.length
    if(!array.length){
      return result
    }
    if(this.isString(iteratee)){
      values = values.map(it => it[iteratee])
    }
    if(this.isFunction(iteratee)){
      values = values.map(it => iteratee(it))
    }
    for(let value of array){
      const computed = iteratee == null ? value : (this.isFunction(iteratee) ? iteratee(value) : value[iteratee])
      let valuesIndex = valuesLength
      while(valuesIndex--){
        if(values[valuesIndex] === computed){
          break
        }
      }
      valuesIndex === -1 ? result.push(value) : result
    }
    return result
  },
  differenceWith: function(array, values, comparator = null){
    var result = []
    if(!comparator){
      return result
    }
    values = this.flattenDeep(values)
    for(let value of array){
      let valuesIndex = values.length
      while(valuesIndex--){
        if(comparator(value,values[valuesIndex])){
          break
        }
      }
      valuesIndex === -1 ? result.push(value) : result
    }
    return result
  },
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
    return [].concat(...ary)
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
  toPairs(obj){

  },
  // fromPairs: function(pairs){

  // },
  head: function(ary){
    return ary[0]
  },
  indexOf: function(ary, value, from = 0){
    for(var i = from; i < ary.length; i++){
      if(ary[i] === value){
        return i
      }else if(ary[i] != ary[i] && value != value) {
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
  join: function(array, sep = ''){
    var res = ''
    for(var i = 0; i < array.length - 1; i++){
      res = res + array[i] + sep
    }
    res += array[array.length-1]
    return res
  },
  last: function(ary){
    if(ary == null){
      return undefined
    }else{
      return ary[ary.length-1]
    }
  },
  lastIndexOf: function(ary, val, fromIndex = ary.length - 1){
    for(var i = fromIndex; i >= 0; i--){
      if(ary[i] == val){
        return i
      }else if(ary[i] != ary[i] && val != val) {
        return i
      }
    }
    return -1
  },
  nth: function(ary, n = 0){
    if(n >= 0){
      return ary[n]
    }else{
      return ary[ary.length + n]
    }
  },
  pull: function(ary, ...values){
    for(var i = 0; i < values.length; i++){
      while(ary.indexOf(values[i]) >= 0){
        ary.splice(ary.indexOf(values[i]),1)
      }
    }
    return ary
  },
  pullAll: function(ary, values){
    for(var i = 0; i < values.length; i++){
      while(ary.indexOf(values[i]) >= 0){
        ary.splice(ary.indexOf(values[i]),1)
      }
    }
    return ary
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
    var passed = []
    if(this.isFunction(f)){
      for(var i = 0; i < array.length; i++){
        if(f(array[i])){
          passed.push(array[i])
        }
      }
    }else if(this.isString(f)){
      for(var i = 0; i < array.length; i++){
        if((f in array[i] && array[i][f])){
          passed.push(array[i])
        }
      }
    }else if(this.isArray(f)){
      for(var i = 0; i < array.length; i++){
        if((f[0] in array[i] && array[i][f[0]] == f[1])){
          passed.push(array[i])
        }
      }
    }else{
      for(var i = 0; i < array.length; i++){
        var a = true
        for(key in f){
          if(key in array[i] && f[key] == array[i][key]){
          }else{
            a = false
          }
        }
        if(a){
          passed.push(array[i])
        }
      }
    }
    
    return passed
  },
  find: function(collection, predicate, fromIndex = 0){
    if(!predicate){
      return collection[fromIndex]
    }else if(this.isArray(predicate)){
      fun = it => it[predicate[0]] == predicate[1]
    }else if(this.isString(predicate)){
      fun = it => it[predicate]
    }else if(this.isObjectLike(predicate)){
      fun = it => {
        for(let key in predicate){
          return key in it && it[key] == predicate[key]
        }
      }
    }else{
      fun = predicate
    }
    for(var i = fromIndex; i < collection.length; i++){
      if(fun(collection[i])){
        return collection[i]
      }
    }
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
  isArrayLike: function(value){
    return value != null && !this.isFunction(value) && (value.length>=0 && value.length <= Number.MAX_SAFE_INTEGER && value.length % 1 == 0)
  },
  isArrayLikeObject: function(value){
    return this.isArrayLike(value) && this.isObjectLike(value)
  },
  isEqual: function(value, other){
    if(value === other){
      return true
    }else if(value != value && other != other){
      return true
    }else if(this.isObject(value) && this.isObject(other)){
      var valuekey = Object.keys(value)
      var otherkey = Object.keys(other)
      if(valuekey.length !== otherkey.length){
        return false
      }else{
          for(let key in value){
            if(this.isEqual(value[key], other[key])){
              continue
            }else{
              return false
            }
          }
      }
      return true
    }else{
      return false
    }
  },
  isFunction: function(value){
    return Object.prototype.toString.call(value) == '[object Function]'
  },
  toFinite: function(value){

  },
  toInteger: function(value){

  },
  isIntrger: function(value){

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
  toNumber: function(value){
    if(typeof value == 'number'){
      return value
    }
    if(this.isSymbol(value)){
      return NaN
    }
    if(this.isObject(value)){
      var other = typeof value.valueof == 'function' ? value.valueof() : value
      value = this.isObject(other) ? (other + '') : other
    }
    if(typeof value != 'string'){
      return value === 0 ? value : +value
    }
    value = value.replace(/^\s+|\s+$/, '')
    var isBinary = /^0b[12]+$/i.test(value)
    return (isBinary || /^0o[1-7]+$/i.test(value))
     ? parseInt(value.slice(2), isBinary ? 2 : 8)
      : (/^[+-]0x[0-9a-f]+&/i.test(value) ? NaN : +value)
  },
  isNumber: function(value){
    return typeof value == 'number' || (this.isObjectLike(value) && getTag(value) == '[object Number]')
  },
  isObject: function(value){
    var type = typeof value
    return value != null && (type == 'object' || type == 'function')
  },
  isObjectLike: function(value){
    return typeof value == 'object' && value != null
  },
  isString: function(value){
    return Object.prototype.toString.call(value) == '[object String]'
  },
  isSymbol: function(value){
    return typeof value == 'symbol' || (typeof value == 'object' && Object.prototype.toString.call(value) == '[object Symbol]')
  },
  identity: function(...values){
    return values[0]
  },
  matches: function(src){
    return function(obj){
      return this.isMatch(obj, src)
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
  },
  getTag: function(value){
    if(value == null){
      return value === undefined ? '[object Undefined]' : '[object Null]'
    }
      return Object.prototype.toString.call(value)
  },
  // baseDifference.js
// baseDifference方法用来将array数组与values数组进行对比，将存在于两者之中的元素从array数组中剔除掉，array中剩余的值组成一个新数组返回
// 对比的时候可以传入迭代器iteratee函数，array和values数组中的每个元素都会调用迭代器iteratee进行处理，然后chubaseDifference对比处理后的值
// 对比的时候也可以传入比较器函数，在对比的时候调用comparator来比较array和values中每个元素，可以理解为比较器comparator定义了对比的规则，默认是看两个值是否相等
// baseDifference方法会接收4个参数，依次为需要处理的array数组、用来对比的values数组、迭代器iteratee、比较器comparator
// 迭代器iteratee是个function，array和values中的每个元素都需要调用该方法处理
// 遍历values，当values中有元素与computed相同时，跳出当前array的循环，继续进行array的下一个循环，这样可以减少不必要的循环
      // 只有当遍历完values中所有的元素后，如果都没有与computed相同的，说明当前value是array独有的，那么将value添加到result中

}
