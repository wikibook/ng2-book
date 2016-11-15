// 화살표함수 사용하지 않고 함수정의
var pow1 = function (x) { return x * x; };
console.log(pow1(3));

var pow2 = (x) => { return x * x; };
console.log(pow2(3));

var pow3 = (x) => { 
    return x * x;    
};
console.log(pow3(3));

var pow4 = x => x * x;
console.log(pow4(3));

((x) => {
    console.log(x * x);
})(3);