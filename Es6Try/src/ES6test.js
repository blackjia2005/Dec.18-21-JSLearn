/**
 * Dec.21 
 * 12. Es6：箭头函数
 * 13. Es6：定义对象，简写 
 * 14. Es6: 对象解构
 * 15. Es6: 传播操作符
 */

var sum = function(a=100,b=100){        // 设置默认值
    return a+b;
}

// 箭头函数 -- 1
var sum1 = (a,b) => {
    return a+b;
}

// 箭头函数 -- 2 只有return语句
var sum2 = (a=0,b=0) => a+b; 

// An Example
var arr = [1,2,3,4,5,6,7];
var newarr = arr.map((obj) => obj*2);

console.log(newarr); 

// 定义对象简写 -------------------------------------

let gender = "male";
let age = 18;
let blake = {name:"blake",gender,age,go(){console.log("我走啦～")}}; // function省略写法

console.log(blake.gender);           // 默认    变量名:变量值

// 对象解构 --------------------------------------------
// let {go, name} = blake;
// console.log(go(),name);

// 传播操作符 ---------------------------------------
// let {go,name, ...rest} = blake;
// console.log(rest);               // ...都进入rest对象
