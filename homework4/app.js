// Task 1

function sumSliceArray(arr, first, second) {
    let answer = arr[first] + arr[second];
    let correct;
    if (typeof first !== "number" || typeof second !== "number") {
      correct = typeof first !== "number" ? first : second;
      throw new Error(
        `The ${correct} variable is not a number, please enter strictly numbers`,
      );
    } else if (first >= arr.length || second >= arr.length) {
      correct = first > arr.length ? first : second;
      throw new Error(
        `The ${correct}, index is greater than the length of the array, please write numbers less, at least by one, than ${arr.length}`,
      );
    }
    return answer;
  }
  sumSliceArray([1, 2, 3, 4, 5, 6, 7], 8, 2);
  
  // Taks 2
  
  function checkAge(age, name, status) {
    age = prompt("enter your age?");
    name = prompt("enter your name?");
    status = prompt("what's you status?");
    let number = Number(age);
    if (!age || !name || !status) {
      let empty = !age ? "age" : !name ? "name" : "status";
      throw new TypeError(
        `The field is empty! Please enter your ${empty} :TypeError.`,
      );
    }
    if (age < 18 || age > 70) {
      throw new RangeError(
        "The age is out of the required range! Please enter a valid age.",
      );
    }
    if (status !== "admin" && status !== "moderator" && status !== "user") {
      throw new EvalError(
        "Invalid status! Please enter a valid status (admin, moderator, or user).",
      );
    }
    if (isNaN(number)) {
      throw new EvalError(
        "The age value is not a number! Please enter a valid age.",
      );
    }
    console.log("You can watch the film");
  }
  
  try {
    checkAge();
  } catch (err) {
    if (err instanceof RangeError) {
      console.log(err.name);
    } else if (err instanceof TypeError) {
      console.log(err);
    } else if (err instanceof EvalError) {
      console.log(err);
    }
  }
  
  // Task 3
  
  function calcRectangleArea(width, height) {
    const area = width * height;
    let w = Number(width);
    let h = Number(height);
    if (isNaN(w) || isNaN(h)) {
      let otherValue = isNaN(w) ? "width" : "height";
      throw new TypeError(
        `The ${otherValue} value you've provided is not a number`,
      );
    }
    return area;
  }
  
  try {
    calcRectangleArea(5, 5);
  } catch (err) {
    if (err instanceof TypeError) {
      console.log(err);
    }
  }
  
  //  Task 4
  
  class MonthException {
    constructor(message) {
      this.name = "MonthException";
      this.message = message;
    }
  
    showMonthName(month) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      if (month >= 1 && month <= months.length) {
        return months[month - 1];
      } else {
        throw new MonthException("Incorrect month number.");
      }
    }
  }
  
  try {
    const exception = new MonthException();
    exception.showMonthName(12);
  } catch (err) {
    if (err instanceof MonthException) {
      console.log(err.message);
    }
  }
  
  // Task 5
  
  function showUser(ids) {
    let arr = [];
    let requiredArr = [];
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] < 0) {
        throw new RangeError(`Error: ID must not be negative:${ids[i]}`);
      } else {
        arr.push(ids[i]);
      }
    }
  
    for (let j = 0; j < arr.length; j++) {
      requiredArr[j] = { id: arr[j] };
    }
    return requiredArr;
  }
  try {
    showUser([7, -12, 44, -55, 22]);
  } catch (err) {
    if (err instanceof RangeError) {
      err;
    }
  }
  