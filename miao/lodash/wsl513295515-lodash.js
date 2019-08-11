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
  transtype: function(predicate){
    if(!predicate){
      fun = it => it
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
    return fun
  },
  dropRightWhile: function(array, predicate){
    this.transtype(predicate)
    while(array.length && fun(this.last(array))){
      array.pop()
    }
    return array
  },
  dropWhile: function(array, predicate){
    this.transtype(predicate)
    while(array.length && fun(array[0])){
      array.shift()
    }
    return array
  },
  fill: function(ary = [], value ,start = 0 ,end = ary.length){
    for(var i = start; i < end; i++){
      ary[i] = value
    }
    return ary
  },
  findIndex: function(collection, predicate, fromIndex = 0){
    this.transtype(predicate)
    for(var i = fromIndex; i < collection.length; i++){
      if(fun(collection[i])){
        return i
      }
    }
    return -1
  },
  findLastIndex: function(collection, predicate, fromIndex = collection.length-1){
    this.transtype(predicate)
    for(var i = fromIndex; i >= 0; i--){
      if(fun(collection[i])){
        return i
      }
    }
  },
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
  fromPairs: function(pairs){
    var result = {}
    for(var i = 0; i < pairs.length; i++){
      result[pairs[i][0]] = pairs[i][1]
    }
    return result
  },
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
  intersectionBy: function(array, arrays, iteratee){
    var result = []
    this.transtype(iteratee)
    let ary = this.flattenDeep(arrays).map(it => fun(it))
    for(let key of array){
      if(ary.includes(fun(key))){
        result.push(key)
      }
    }
    return result
  },
  intersectionWith: function(array, arrays, comparator){
    var result = []
    let ary = this.flattenDeep(arrays)
    for(let key of array){
      let arylength = ary.length
      while(arylength--)
      if(comparator(key,ary[arylength])){
        result.includes(key) ? reault : result.push(key)
      }
    }
    return result
  },
  join: function(array, separator = ''){
    var res = ''
    for(var i = 0; i < array.length - 1; i++){
      res = res + array[i] + separator
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
  pull: function(array, ...values){
    for(let key of values){
      while(array.includes(key)){
        array.splice(array.indexOf(key),1)
      }
    }
    return array
  },
  pullAll: function(array, values){
    for(let key of values){
      while(array.includes(key)){
        array.splice(array.indexOf(key),1)
      }
    }
    return array
  },
  pullAllBy: function(array, values, iteratee){
    this.transtype(iteratee)
    let val = this.flattenDeep(values).map(it => fun(it))
    for(let key of val){
      while(array.map(it=>fun(it)).includes(key)){
        array.splice(array.map(it=>fun(it)).indexOf(key),1)
      }
    }
    return array
  },
  pullAllWith: function(array, values, comparator){
    for (var i = 0; i < values.length; i++) {
        for(var j = 0; j < array.length; j++){
          if(comparator(array[j],values[i])){
            array.splice(j,1)
          }
        }
    }
    return array
  },
  reverse: function(array){
    var arraylength = array.length
    while(arraylength--){
      array.push(array[arraylength])
    }
    return array.slice(array.length / 2)
  },
  sortedIndex: function(array, value){
    var low = 0
    var high = array.length - 1
    if(value < array[low]){
      return 0
    }
    if(value > array[high]){
      return high
    }
    while(low < high - 1){
      var mid = (low + high) >>> 1
      if(value > array[mid]){
        low = mid
      }else if(value < array[mid]){
        high = mid
      }else{
        high = mid
      }
    }
    if(value > array[low]){
      return high
    }
    return low
  },
  sortedIndexBy: function(array, value, iteratee){
    this.transtype(iteratee)
    var val = fun(value)
    var ary = array.map(it => fun(it))
    var low = 0
    var high = ary.length - 1
    if(val < ary[low]){
      return 0
    }
    if(value > ary[high]){
      return high
    }
    while(low < high - 1){
      var mid = (low + high) >>> 1
      if(value > ary[mid]){
        low = mid
      }else if(value < ary[mid]){
        high = mid
      }else{
        high = mid
      }
    }
    if(value > ary[low]){
      return high
    }
    return low
  },
























  union: function(){

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
}
