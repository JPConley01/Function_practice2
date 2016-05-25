//1. getName

function getName(obj) {
  return obj.name
}


//test obj

var obj = {
  name:"Luisa",
  age: 25
}

 ///test 1

 console.log(getName(obj));


//2. totalLetters

function totalLetters(arr) {
  var total = 0;
  for (string of arr){
    total = total + string.length;
  }
  return total;
}


//test array 2
var testArr = ["javascript","is","awesome"];

console.log(totalLetters(testArr));



//3. keyValue

function keyValue(item1, item2) {
  var newObj = {

  }
  newObj [item1] = item2;
  return newObj;
  }

  //test values 3
  console.log(keyValue("city", "Denver"));


  //4. negativeIndex

  function negativeIndex(arr, num) {
    // body...
  num = num * -1;
  arr.reverse();
  return arr[num-1];
}

//test log 4

console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));

//5. removeM

function removeM(str) {
  var index = str.indexOf("m");
  str = str.slice(0,index) + str.slice(index+1, str.length);
  if (str.indexOf("m") != -1) {
  return removeM(str)
  }
  return str;

//test log 5
}
console.log(removeM('memory'));

//6. printObject

function printObject(obj) {
  for (key in obj) {
    console.log(key + " is " + obj[key]);
  }

}
//test obj 6
printObject({ firstName: 'pork', lastName: 'chops' })

//7. vowels

function vowels(str) {
  var arr = [];
  for (letter of str) {
    switch (letter) {
      case "a":
        arr.push("a");
        break;
      case "e":
        arr.push("e");
        break;
      case "i":
        arr.push("i");
        break;
      case "o":
        arr.push("o");
        break;
      case "u":
        arr.push("u");
        break;
    }
  }
  return arr;
}

//test log 7
console.log(vowels('What evil odd ducks!'));

//8. twins

function twins(arr) {
  for (var i = 0; i < arr.length; i+=2) {
    if (arr[i] != arr[i + 1]) {
      return false;
    }
  }
  return true;
}

//test logs 8
console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));

//9. or

function or(arr) {
  for (item of arr){
    if (item == true) {
      return true;
    }else if (arr.length == 0){
      return false;
    }
  }
  return false;
}

// test log 9

console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([]));

//10. unique

function unique(arr) {
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
      if (unique.indexOf(arr[i]) == -1) {
        unique.push(arr[i]);
      }
  }
  return unique;
};

//test log 10

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']));