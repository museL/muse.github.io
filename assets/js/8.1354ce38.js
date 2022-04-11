(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{573:function(e,v,_){"use strict";_.r(v);var a=_(5),n=Object(a.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("本篇博客主要是对 Javcscript 异步编程方案总结\n")]),e._v(" "),_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),_("p",[e._v("Javcscript是单线程机制，单线程模型指的是，JavaScript只在一个线程上运行。也就是说，JavaScript 同时只能执行一个任务，其他任务都必须在后面排队等待。JavaScript 之所以采用单线程，而不是多线程，原因是不想让浏览器变得太复杂，因为多线程需要共享资源、且有可能修改彼此的运行结果，对于一种网页脚本语言来说，这就太复杂了。")]),e._v(" "),_("h2",{attrs:{id:"异步编程解决了什么问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异步编程解决了什么问题"}},[e._v("#")]),e._v(" 异步编程解决了什么问题？")]),e._v(" "),_("p",[e._v("单线程的好处是实现起来比较简单，执行环境相对单纯；坏处是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。常见的浏览器无响应（假死），往往就是因为某一段JavaScript代码长时间运行（比如死循环），导致整个页面卡在这个地方，其他任务无法执行。")]),e._v(" "),_("p",[e._v("为了解决JavaScript执行任务只能一个一个排队执行得问题（同步执行）引入了异步编程方案来实现（异步并行执行任务），对于几种常见异步编程方案有：")]),e._v(" "),_("ul",[_("li",[e._v("回调函数")]),e._v(" "),_("li",[e._v("事件监听")]),e._v(" "),_("li",[e._v("发布/订阅")]),e._v(" "),_("li",[e._v("Promise对象")]),e._v(" "),_("li",[e._v("Generator/yield（ES6）")]),e._v(" "),_("li",[e._v("async/await（ES7）")])]),e._v(" "),_("h2",{attrs:{id:"同步和异步任务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#同步和异步任务"}},[e._v("#")]),e._v(" 同步和异步任务")]),e._v(" "),_("p",[e._v("程序里面所有的任务，可以分成两类：同步任务（synchronous）和异步任务（asynchronous）。")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("同步任务")]),e._v(":是指那些没有被引擎挂起、在主线程上排队执行的任务。只有前一个任务执行完毕，才能执行后一个任务。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("异步任务")]),e._v(":是指那些被引擎放在一边，不进入主线程、而进入任务队列的任务。")])])]),e._v(" "),_("p",[e._v("只有引擎认为某个异步任务可以执行了（比如 Ajax 操作从服务器得到了结果），该任务（采用回调函数的形式）才会进入主线程执行。"),_("code",[e._v("JavaScript")]),e._v("运行时，除了一个正在运行的主线程，引擎还提供一个任务队列（task queue），里面是各种需要当前程序处理的异步任务。")]),e._v(" "),_("p",[e._v("异步任务的写法通常是"),_("code",[e._v("回调函数")]),e._v("。一旦异步任务重新进入主线程，就会执行对应的回调函数。如果一个异步任务没有回调函数，就不会进入任务队列，也就是说，不会重新进入主线程，因为没有用回调函数指定下一步的操作。")]),e._v(" "),_("p",[_("strong",[e._v("下面总结一下异步操作的几种模式。")])]),e._v(" "),_("h2",{attrs:{id:"_1、回调函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、回调函数"}},[e._v("#")]),e._v(" 1、回调函数")]),e._v(" "),_("p",[e._v("回调函数是异步操作最基本的方法，一般指函数里面嵌套函数来调用其他函数。")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("function f1(callback) {\n  // ...\n  callback();\n}\n\nfunction f2() {\n  // ...\n}\n\nf1(f2);\n")])])]),_("ul",[_("li",[_("code",[e._v("优点")]),e._v("：简单、容易理解和实现。")]),e._v(" "),_("li",[_("code",[e._v("缺点")]),e._v("：不利于代码的阅读和维护，容易形成‘回调地狱’，各个部分之间高度耦合（coupling），使得程序结构混乱、流程难以追踪（尤其是多个回调函数嵌套的情况），而且每个任务只能指定一个回调函数。")])]),e._v(" "),_("h2",{attrs:{id:"_2、事件监听"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、事件监听"}},[e._v("#")]),e._v(" 2、事件监听")]),e._v(" "),_("p",[e._v("事件监听是采用事件驱动模式。异步任务的执行不取决于代码的顺序，而取决于某个事件是否发生。")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("f1.on('done', f2);\n\nfunction f1() {\n  setTimeout(function () {\n    // ...\n    f1.trigger('done'); // 触发done事情\n  }, 1000);\n}\n")])])]),_("p",[e._v("上面代码使用JQuery编写， 首先，为"),_("code",[e._v("f1")]),e._v("绑定一个事件，当"),_("code",[e._v("f1")]),e._v("发生"),_("code",[e._v("done")]),e._v("事件，就执行"),_("code",[e._v("f2")]),e._v("，而"),_("code",[e._v("f1")]),e._v("执行完成后，立即触发"),_("code",[e._v("done")]),e._v("事件，从而开始执行"),_("code",[e._v("f2")]),e._v("。")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("优点")]),e._v('：比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以"去耦合"（Decoupling），有利于实现模块化。')]),e._v(" "),_("li",[_("code",[e._v("缺点")]),e._v("：整个程序都要变成事件驱动型，运行流程会变得很不清晰。")])]),e._v(" "),_("h2",{attrs:{id:"_3、发布-订阅"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、发布-订阅"}},[e._v("#")]),e._v(" 3、发布/订阅")]),e._v(" "),_("p",[e._v("事件完全可以理解成"),_("code",[e._v("信号")]),e._v("，如果存在一个"),_("code",[e._v("信号中心")]),e._v("，某个任务执行完成，就向信号中心"),_("code",[e._v("发布")]),e._v("一个信号，其他任务可以向信号中心"),_("code",[e._v("订阅")]),e._v("这个信号，从而知道什么时候自己可以开始执行。这就叫做"),_("code",[e._v("发布/订阅模式")]),e._v("，又称"),_("code",[e._v("观察者模式")]),e._v("。")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("// 订阅信号\njQuery.subscribe('done', f2);\n\nfunction f1() {\n  setTimeout(function () {\n    // ...\n    // 向信号中心jQuery发布done信号,从而引发f2的执行\n    jQuery.publish('done');\n  }, 1000);\n}\n\n// 取消订阅\njQuery.unsubscribe('done', f2);\n")])])]),_("p",[e._v("上面代码使用JQuery编写，首先，"),_("code",[e._v("f2")]),e._v("向信号中心"),_("code",[e._v("jQuery")]),e._v("订阅"),_("code",[e._v("done")]),e._v("信号。"),_("code",[e._v("f1")]),e._v("执行完成后，向信号中心"),_("code",[e._v("jQuery")]),e._v("发布"),_("code",[e._v("done")]),e._v("信号，从而引发"),_("code",[e._v("f2")]),e._v("的执行。")]),e._v(" "),_("p",[e._v("这种方法的性质与"),_("code",[e._v("事件监听")]),e._v("类似，但是明显优于后者。因为可以通过查看"),_("code",[e._v("消息中心")]),e._v("，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。")]),e._v(" "),_("h2",{attrs:{id:"_4、promise"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、promise"}},[e._v("#")]),e._v(" 4、Promise")]),e._v(" "),_("p",[_("code",[e._v("Promise")]),e._v(" 实际就是一个对象， 从它可以获得异步操作的消息，"),_("code",[e._v("Promise")]),e._v(" 对象有三种状态，"),_("code",[e._v("pending")]),e._v("(进行中)、"),_("code",[e._v("fulfilled")]),e._v("（已成功）和"),_("code",[e._v("rejected")]),e._v("（已失败）。"),_("code",[e._v("Promise")]),e._v(" 的状态一旦改变之后，就不会在发生任何变化,将回调函数变成了链式调用。")]),e._v(" "),_("p",[_("code",[e._v("Promise")]),e._v(" 的设计思想是，每一个异步任务返回一个"),_("code",[e._v("Promise")]),e._v("对象，该对象有一个"),_("code",[e._v("then")]),e._v("方法，用来指定下一步的回调函数。")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("var p1 = new Promise(f1);\np1.then(f2);\n")])])]),_("p",[e._v("上面代码中，"),_("code",[e._v("f1")]),e._v("的异步操作执行完成，就会执行"),_("code",[e._v("f2")]),e._v("。")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("function f1(){\n    var dfd = $.Deferred();\n    setTimeout(function () {\n        // f1的任务代码\n        dfd.resolve();\n    }, 500);\n    return dfd.promise;\n}\n")])])]),_("p",[e._v("每次调用返回的都是一个新的Promise实例(then可用链式调用的原因)")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("// 传统写法\nstep1(function (value1) {\n  step2(value1, function(value2) {\n    step3(value2, function(value3) {\n      step4(value3, function(value4) {\n        // ...\n      });\n    });\n  });\n});\n\n// Promise 的写法\n(new Promise(step1))\n  .then(step2)\n  .then(step3)\n  .then(step4);\n")])])]),_("p",[e._v("传统的写法可能需要把"),_("code",[e._v("f2")]),e._v("作为回调函数传入"),_("code",[e._v("f1")]),e._v("，比如写成"),_("code",[e._v("f1(f2)")]),e._v("，异步操作完成后，在"),_("code",[e._v("f1")]),e._v("内部调用"),_("code",[e._v("f2")]),e._v("。"),_("code",[e._v("Promise")]),e._v("使得"),_("code",[e._v("f1")]),e._v("和"),_("code",[e._v("f2")]),e._v("变成了链式写法。不仅改善了可读性，而且对于多层嵌套的回调函数尤其方便。")]),e._v(" "),_("h2",{attrs:{id:"_5、generator"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、generator"}},[e._v("#")]),e._v(" 5、Generator")]),e._v(" "),_("p",[_("code",[e._v("Generator")]),e._v(" 函数是协程在 "),_("code",[e._v("ES6")]),e._v(" 的实现，最大特点就是可以交出函数的执行权（即暂停执行）")]),e._v(" "),_("p",[_("code",[e._v("Generator")]),e._v(" 函数是一个状态机，封装了多个内部状态。执行 "),_("code",[e._v("Generator")]),e._v(" 函数会返回一个遍历器对象，使用该对象的 "),_("code",[e._v("next()")]),e._v(" 方法，可以遍历 "),_("code",[e._v("Generator")]),e._v(" 函数内部的每一个状态，直到 "),_("code",[e._v("return")]),e._v(" 语句。")]),e._v(" "),_("p",[_("code",[e._v("Generator")]),e._v(" 函数的特征:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("function")]),e._v(" 关键字与函数名之间有一个星号")]),e._v(" "),_("li",[e._v("函数体内部使用 "),_("code",[e._v("yield")]),e._v(" 表达式，"),_("code",[e._v("yield")]),e._v(" 是暂停执行的标记")]),e._v(" "),_("li",[_("code",[e._v("next()")]),e._v(" 方法遇到 "),_("code",[e._v("yield")]),e._v(" 表达式，就暂停执行后面的操作,并返回后面的值。")])]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("function* gen(x){\n  var y = yield x + 2;\n  return y;\n}\n\nvar g = gen(1);\ng.next() // { value: 3, done: false }\ng.next(2) // { value: 2, done: true }\n")])])]),_("p",[e._v("上面代码中，第一个 "),_("code",[e._v("next")]),e._v(" 方法的 "),_("code",[e._v("value")]),e._v(" 属性，返回表达式 "),_("code",[e._v("x + 2")]),e._v(" 的值"),_("code",[e._v("3")]),e._v("。第二个 "),_("code",[e._v("next")]),e._v(" 方法带有参数"),_("code",[e._v("2")]),e._v("，这个参数可以传入 "),_("code",[e._v("Generator")]),e._v(" 函数，作为上个阶段异步任务的返回结果，被函数体内的变量 "),_("code",[e._v("y")]),e._v(" 接收。因此，这一步的 "),_("code",[e._v("value")]),e._v(" 属性，返回的就是"),_("code",[e._v("2")]),e._v("（变量 y 的值）。")]),e._v(" "),_("h2",{attrs:{id:"_6、async-await"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6、async-await"}},[e._v("#")]),e._v(" 6、async/await")]),e._v(" "),_("p",[_("code",[e._v("async")]),e._v(" 函数就是 "),_("code",[e._v("Generator")]),e._v(" 函数的语法糖。"),_("code",[e._v("async")]),e._v(" 函数返回一个 "),_("code",[e._v("Promise")]),e._v(" 对象，可以使用 "),_("code",[e._v("then")]),e._v(" 方法添加回调函数。当函数执行的时候，一旦遇到 "),_("code",[e._v("await")]),e._v(" 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。")]),e._v(" "),_("p",[_("code",[e._v("async/await")]),e._v("的特征有：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("async/await")]),e._v("是基于"),_("code",[e._v("Promise")]),e._v("实现的，它不能用于普通的回调函数。")]),e._v(" "),_("li",[_("code",[e._v("async/await")]),e._v("与"),_("code",[e._v("Promise")]),e._v("一样，是非阻塞的。")]),e._v(" "),_("li",[_("code",[e._v("async/await")]),e._v("使得异步代码看起来像同步代码，这正是它的魔力所在。")])]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("async function async1() {\n  return 2\n}\nconsole.log(async1()) // Promise {<resolved>: 2}\n")])])]),_("p",[e._v("上面代码中，函数前面加上 "),_("code",[e._v("async")]),e._v(" 就会返回一个 "),_("code",[e._v("promise")]),e._v(" 对象。")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("const fs = require('fs');\n\nconst readFile = function (fileName) {\n  return new Promise(function (resolve, reject) {\n    fs.readFile(fileName, function(error, data) {\n      if (error) return reject(error);\n      resolve(data);\n    });\n  });\n};\n// Generator 函数写法\nconst gen = function* () {\n  const f1 = yield readFile('/etc/fstab');\n  const f2 = yield readFile('/etc/shells');\n  console.log(f1.toString());\n  console.log(f2.toString());\n};\n\n// aynsc 函数写法\nconst asyncReadFile = async function () {\n  const f1 = await readFile('/etc/fstab');\n  const f2 = await readFile('/etc/shells');\n  console.log(f1.toString());\n  console.log(f2.toString());\n};\n")])])]),_("p",[e._v("一比较就会发现，"),_("code",[e._v("async")]),e._v("函数就是将"),_("code",[e._v("Generator")]),e._v("函数的星号"),_("code",[e._v("*")]),e._v("替换成"),_("code",[e._v("async")]),e._v("，将"),_("code",[e._v("yield")]),e._v("替换成"),_("code",[e._v("await")]),e._v("，仅此而已。")]),e._v(" "),_("p",[_("code",[e._v("优点")]),e._v("：更好的语义,更广的适用性,返回值是 Promise。")]),e._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),_("p",[e._v("JS 异步编程发展史："),_("code",[e._v("callback")]),e._v(" -> "),_("code",[e._v("promise")]),e._v(" -> "),_("code",[e._v("generator")]),e._v(" -> "),_("code",[e._v("async + await")]),e._v("。"),_("code",[e._v("async/await")]),e._v("函数的实现是将"),_("code",[e._v("Generator")]),e._v("函数和自动执行器，包装在一个函数里。它也是目前异步最好的解决方案了。")])])}),[],!1,null,null,null);v.default=n.exports}}]);