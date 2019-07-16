// 高阶函数： 语意表达更明确，同时易于避免错误
// 抽象： 隐藏底层的实现细节，从更高的层次看待需要解决的问题
// 需要在恰当的时候将代码抽象出来，形成一个新的函数或概念
// 函数是一种类型的值，可以传递，甚至可以进行运算（转成字符串拼接）

function forEach(ary, action) {
  for(var i = 0; i < ary.length; i++){
    action(ary[i], i, ary)
  }
}

function action(item, idx, ary){
  var s = item * idx
  console.log(s)
}  
forEach([1,2,3],action)

// ↑↓ 二者是相同的，都是调用了action函数，只不过
// 一个函数写在了全局，一个函数直接写在了参数中
// 所以不存在闭包

forEach([1,2,3], (item, idx, ary) => {
  var s = item * idx
  console.log(s)
})
 



// 箭头函数:
      // 省掉function关键字，替换为 =>
      // 当只有一个参数时，括号可以省略
      // 当函数只有一条return语句时，可以把大括号和return一起省掉

var add = function(a, b) {
  return a + b
}
var add = (a, b) => {
  return a + b
}

var square = a => {
  return a * a
}
var square = a => a * a




// ( )调用了之前的函数

var a = function(x){
  return 8 + x
}(9)
// a == 17



//参数传递

fun(1,2,3,4)   /** 硬编码： 只能传递静态参数 */
ary = [1,2,3,4]
fun.apply(null, ary)  /** ary中有多少参数就会传递多少参数 */
fun(...ary)  /** 与apply用法相同，现在更多地用... */




function map(ary, mapper){
  return ary.reduce(function(result, item){
    return result.push(mapper(item))
  }, [])
}