// let funcNoname = function() {
//     alert('함수_01')
//     alert('함수_02')
// }

// // funcNoname();

// alert(typeof(funcNoname) + ' : ' + funcNoname);

// function funcNoname(){
//     alert('함수_01');
//     alert('함수_02');
// };

// alert(typeof(funcNoname) + ' : ' + funcNoname);

// function f(x) {
//     return x*x;
// };

// alert(f(3));

// let fun = function () {
//     alert('함수호출');
// };

// function callTenTimes(callback_func) {
//     for (let i = 0; i < 10; i++) {
//         callback_func();
//     }
// }

// callTenTimes(fun);

let person = {
    name: '서병국',
    eat: function(food) {
        alert(this.name + '님이 ' + food + '을/를 먹습니다.');
    } 
};

// 메서드 호출
person.eat('햄부기햄북스');