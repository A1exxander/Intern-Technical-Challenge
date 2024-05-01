function outer(paramOne){ 
    return function inner(paramTwo){ // Our inner function captures paramOne
        return paramOne + paramTwo;
    }
}

console.log(outer(1)(2));

function count() {
    for (let counter = 0; counter < 3; counter++) {
      setTimeout((currentCounter) => {
        console.log("counter value is : " + currentCounter);
      }, 100, counter);
    }
  }
  count();