//ES5
// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

  //ES2015

  const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {numbers:{a, b}} = obj

  //ES5 Array Swap

// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

//ES2015 one-line array swap and destructruring
// let arr= [1,2] // just setting the variable value
// [arr[0], arr[1]]=[arr[1], arr[0]]

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
    

