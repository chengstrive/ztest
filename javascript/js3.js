// "use strict"
/*
  console.log(Math.pow(2, 53));
  console.log(Math.PI);

  var then = new Date(2011, 0, 1);
  console.log(then);
  var later = new Date(2011, 0, 1, 17, 10, 30);
  console.log(later);
  var now = new Date();
  console.log(now - then);
  console.log(later.getFullYear() + " 年 " + (later.getMonth() + 1) + " 月 " + later.getDate() + " 日 星期" + later.getDay() + " " + later.getHours() + ":" + later.getMinutes() + ":" + later.getSeconds())


  var s = "hello, world";
  console.log(s.charAt(0) + "\n" +
    s.substring(1, 4) + "\n" +
    s.slice(1, 4) + "\n" +
    s.slice(-3) + "\n" +
    s.indexOf("l") + "\n" +
    s.lastIndexOf("l") + "\n" +
    s.indexOf("l", 3) + "\n" +
    s.split(", ") + "\n" +
    s.replace("l", "L") + "\n" +
    s.toUpperCase()
  );

  console.log("\n");

  var msg = "Hello," + "World";
  console.log(msg + "\n" +
    "msg.length: " + msg.length + "\n" +
    "msg.charAt: " + msg.charAt(0)+ "\n" +
    "msg.charAt: " + msg.charAt(msg.length-1) + "\n" +
    "msg.substring: " + msg.substring(0,4) + "\n" + 
    "msg.slice: " + msg.slice(0,4) + "\n" +
    "msg.slice: " + msg.slice(-3) + "\n" +
    "msg.indexOf: " + msg.indexOf('W') + "\n" +
    "msg.lastIndexOf: " + msg.lastIndexOf('o') + "\n" +
    "msg.split: " + msg.split(',')[0] + "\n" +
    "msg.replace: " + msg.replace("o","12") + "\n" +
    "msg.toUpperCase: " + msg.toUpperCase() + "\n" +
    msg
    );
  //模式匹配 RexExp
  //3.3布尔值
  var a = 3,b = 0;
  if(a == 4){
    b += 1;
  }else{
    a += 1;
  }
  console.log("a == 4: " + a == 4 );
  console.log("a = " + a + " b = " + b );
  console.log("假值: false,undefined, null, 0, -0, NaN, \"\"");

  var o;
  if(o){
    console.log("o是null");
  }else if (o == undefined){
    console.log("o 是undefined")
  }else{
    console.log(o);
  }

  var c = {};
  //null是关键字，他表示一个特殊值，描述“空值”，是一种特殊的对象值，含义是非对象
  console.log(c == null)
  console.log(typeof(null));
  //undefined 未定义的值，表示更深层次的“空值”，它是变量的一种取值，表明变量没有初始化，表示这个属性或元素不存在
  console.log(undefined == null);
  console.log(undefined === null);

  //3.6 包装对象

  var s = "Hello World!"; //new String(s)
  var word = s.substring(s.indexOf(" ") + 1, s.length);
  console.log(word);

  var s={};// = "test";
  s.len = 4; //临时字符串对象
  // console.log("000000000000：" + s.len);
  var t = s.len;
  // console.log(s.len);

  var s = "test", n = 1, b = true;
  var S = new String(s);
  var N = new Number(n);
  var B = new Boolean(b);
  console.log("String S:" + S + "\n" +
    "typeof(S): " + typeof(S) + "\n" +
    "typeof(s): " + typeof(s) + "\n" +
    "S == s: " + (S == s)  + "\n" +
    "S ===s: " + (S === s ))


  //3.7 不可变的原始值和可变的对象引用
  //javascript 原始值： undefined,null,布尔值,数字和字符串
  //对象 数组和函数
  var s = "hello";
  console.log("s:" + s + "\n" +
    "s.toUpperCase: " + s.toUpperCase() + "\n" +
    "s: " + s )

  var o = { x:1 };
  o.x = 2;
  o.y = 3;
  console.log(o);

  var a = { x: 1 },b = { x:1 };
  console.log("a === b:" + (a === b) + "\n" +
    "a == b: " + (a == b)) 


  console.log(Math.pow(2, 53));
  console.log(Math.PI);

  var then = new Date(2011, 0, 1);
  console.log(then);
  var later = new Date(2011, 0, 1, 17, 10, 30);
  console.log(later);
  var now = new Date();
  console.log(now - then);
  console.log(later.getFullYear() + " 年 " + (later.getMonth() + 1) + " 月 " + later.getDate() + " 日 星期" + later.getDay() + " " + later.getHours() + ":" + later.getMinutes() + ":" + later.getSeconds())


  var s = "hello, world";
  console.log(s.charAt(0) + "\n" +
    s.substring(1, 4) + "\n" +
    s.slice(1, 4) + "\n" +
    s.slice(-3) + "\n" +
    s.indexOf("l") + "\n" +
    s.lastIndexOf("l") + "\n" +
    s.indexOf("l", 3) + "\n" +
    s.split(", ") + "\n" +
    s.replace("l", "L") + "\n" +
    s.toUpperCase()
  );

  console.log("\n");

  var msg = "Hello," + "World";
  console.log(msg + "\n" +
    "msg.length: " + msg.length + "\n" +
    "msg.charAt: " + msg.charAt(0)+ "\n" +
    "msg.charAt: " + msg.charAt(msg.length-1) + "\n" +
    "msg.substring: " + msg.substring(0,4) + "\n" + 
    "msg.slice: " + msg.slice(0,4) + "\n" +
    "msg.slice: " + msg.slice(-3) + "\n" +
    "msg.indexOf: " + msg.indexOf('W') + "\n" +
    "msg.lastIndexOf: " + msg.lastIndexOf('o') + "\n" +
    "msg.split: " + msg.split(',')[0] + "\n" +
    "msg.replace: " + msg.replace("o","12") + "\n" +
    "msg.toUpperCase: " + msg.toUpperCase() + "\n" +
    msg
    );
  //模式匹配 RexExp
  //3.3布尔值
  var a = 3,b = 0;
  if(a == 4){
    b += 1;
  }else{
    a += 1;
  }
  console.log("a == 4: " + a == 4 );
  console.log("a = " + a + " b = " + b );
  console.log("假值: false,undefined, null, 0, -0, NaN, \"\"");

  var o;
  if(o){
    console.log("o是null");
  }else if (o == undefined){
    console.log("o 是undefined")
  }else{
    console.log(o);
  }

  var c = {};
  //null是关键字，他表示一个特殊值，描述“空值”，是一种特殊的对象值，含义是非对象
  console.log(c == null)
  console.log(typeof(null));
  //undefined 未定义的值，表示更深层次的“空值”，它是变量的一种取值，表明变量没有初始化，表示这个属性或元素不存在
  console.log(undefined == null);
  console.log(undefined === null);

  //3.6 包装对象

  var s = "Hello World!"; //new String(s)
  var word = s.substring(s.indexOf(" ") + 1, s.length);
  console.log(word);

  var s={};// = "test";
  s.len = 4; //临时字符串对象
  // console.log("000000000000：" + s.len);
  var t = s.len;
  // console.log(s.len);

  var s = "test", n = 1, b = true;
  var S = new String(s);
  var N = new Number(n);
  var B = new Boolean(b);
  console.log("String S:" + S + "\n" +
    "typeof(S): " + typeof(S) + "\n" +
    "typeof(s): " + typeof(s) + "\n" +
    "S == s: " + (S == s)  + "\n" +
    "S ===s: " + (S === s ))


  //3.7 不可变的原始值和可变的对象引用
  //javascript 原始值： undefined,null,布尔值,数字和字符串
  //对象 数组和函数
  var s = "hello";
  console.log("s:" + s + "\n" +
    "s.toUpperCase: " + s.toUpperCase() + "\n" +
    "s: " + s )

  var o = { x:1 };
  o.x = 2;
  o.y = 3;
  console.log(o);

  var a = { x: 1 },b = { x:1 };
  console.log("a === b:" + (a === b) + "\n" +
    "a == b: " + (a == b))

  function equalArrays(a,b){
    if(a.length != b.length) return false;
    for(var i = 0; i < a.length; i++){
      if(a[i] !== b[i]) return false;
    }
    return true;
  }
  console.log(equalArrays([1,2,34,4,5],[1,2,3,4,5]));

  //3.8类型转换
  console.log(10 + " objects " +  "\n" )

  function equalArrays(a,b){
    if(a.length != b.length) return false;
    for(var i = 0; i < a.length; i++){
      if(a[i] !== b[i]) return false;
    }
    return true;
  }
  console.log(equalArrays([1,2,34,4,5],[1,2,3,4,5]));

  //3.8类型转换
  console.log(10 + " objects " +  "\n" )
  var c = 1 ;
  console.log(c + 1);

  var x = 3
  x = x + "" //String(x);
  console.log(typeof(x));
  x=+x  // Number(x);
  console.log(typeof(x));
  !!x //Boolean(x)
  console.log(!!x)

  var n = 17;
  var binary_string = n.toString(2);
  console.log(binary_string)


var n = 123456.789
console.log(n.toFixed(0));
console.log(n.toFixed(2));
console.log(n.toFixed(5));
console.log(n.toPrecision(10));
console.log(parseInt("89242 sdf"));

var arr = [{x:1,y:1},23,12,41,123,123,123,25,22];
console.log(arr.toString());
console.log(({x:1,y:1}).toString());
console.log((function(x){f(x);}).toString());
console.log(/\d+/g.toString());
console.log(new Date(2020,0,1).toString());
console.log(new Date(2020,0,1).valueOf());
console.log(arr.valueOf());


var now = new Date();
console.log(now);
console.log(typeof(now + 1));
console.log(typeof(now - 1));

for (var i = 0; i < 10; i++) {
  console.log(i);
}

*/

var scope = "global";
function checkscope(){
  var scope = "local";
  return scope;
}
console.log(checkscope());
console.log(scope);

// zz = "sdf";
// console.log(zz)

function test(o) {
  i = 0;
  var i;
  if(typeof o == "object") {
    j="Ccc";
    console.log(j);
    var j = 0;
    for (var k = 0; k < 10; k++) {
      console.log(k);
    }
    console.log("k=" + k);
  }
  console.log(j);
}
test({x:1,y:1})

fakevar = 2;
delete fakevar;
var truevar = 1;
delete truevar;
