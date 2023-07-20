// Task 1
function compact(arr) {
    let set = new Set(arr);
    return set;
  }
  const arr = [5, 3, 4, 5, 6, 7, 3];
  
  compact(arr);
  
  // Task 2
  function createArray(start, end) {
    let numbers = [];
    numbers.push(start);
    numbers.push(end);
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i + 1] - numbers[i] > 1) {
        numbers.splice(numbers.indexOf(numbers[i + 1]), 0, numbers[i] + 1);
      }
    }
    return numbers;
  }
  createArray(2, 9);
  
  // Task 3
  function numbers(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
      for (let j = 0; j < i; j++) {
        arr.push(i);
      }
    }
    return arr;
  }
  numbers(1, 10);
  
  // Task 4
  function randArray(k) {
    let arr = [];
    for (let i = 1; i <= k; i++) {
      arr.push(Math.floor(Math.random() * 500));
    }
    return arr;
  }
  
  randArray(3);
  
  // Task 5
  function separatedValues(arr) {
    let arrNumber = [];
    let arrString = [];
    let arrNew = [];
    arr.map((item) => {
      if (typeof item === "number") {
        arrNumber.push(item);
      } else if (typeof item === "string") {
        arrString.push(item);
      } else if (Array.isArray(item)) {
        item.map((value) =>
          typeof value === "number"
            ? arrNumber.push(value)
            : arrString.push(value),
        );
      }
    });
    arrNew.push(arrNumber, arrString);
    return arrNew;
  }
  separatedValues([
    5,
    "Limit",
    12,
    "a",
    "3",
    99,
    2,
    [2, 4, 3, "33", "a", "text"],
    "strong",
    "broun",
  ]);
  
  // Task 6
  function calc(a, b, op) {
    return op === 1 ? a - b : op === 2 ? a * b : op === 3 ? a / b : a + b;
  }
  
  // Task 7
  function findUnique(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
        arr2.push(arr[i]);
      }
    }
    if (arr.length !== arr2.length) {
      return false;
    } else {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== arr2[j]) {
          return false;
        }
      }
      return true;
    }
  }
  
  findUnique([1, 2, 3, 4, 55, 55]);
  
  //   (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
  
  function create(str) {
    return function (item = "pass_for_Tom") {
      return item === str ? true : false;
    };
  }
  const permission = create("pass_for_Tom");
  permission();
  