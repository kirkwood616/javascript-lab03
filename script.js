// ////// 1. Declare variable with array of objects

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

console.log(submissions);

console.log("-----------"); // CONSOLE SEPARATOR

// ////// 2. Add new object to submissions array with evaluated passing score

const addSubmission = (array, newName, newScore, newDate) => {
  let passOrFail = newScore >= 60 ? true : false;
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: passOrFail,
  };
  array.splice(3, 0, newSubmission);
};

addSubmission(submissions, "Bill", 45, "2020-11-05");

console.log(submissions);

// ////// 3. Delete submission object by index position w/ splice

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 3);

console.log(submissions);

////// 4. Delete submission object by name

const deleteSubmissionByName = (array, name) => {
  let findName = array.findIndex((providedName) => providedName.name === name);
  array.splice(findName, 1);
};

deleteSubmissionByName(submissions, "Jill");

console.log(submissions);

////// 5. Edit score & passed values

const editSubmission = (array, index, score) => {
  let scoreCheck = score >= 60 ? true : false;
  array[index].score = score;
  array[index].passed = scoreCheck;
};

editSubmission(submissions, 0, 57);

console.log(submissions);

//// 6. Find by submission name

const findSubmissionByName = (array, name) => {
  let findStudent = array.find((searchName) => searchName.name === name);
  return findStudent;
};

console.log(findSubmissionByName(submissions, "Jack"));

////// 7. Find the lowest score

const findLowestScore = (array) => {
  let lowestScore = 100;
  let lowestIndex;
  array.forEach((submission, ind) => {
    if (submission.score < lowestScore) {
      lowestScore = submission.score;
      lowestIndex = ind;
    }
  });
  return array[lowestIndex];
};

console.log(findLowestScore(submissions));

////// 8. Find the average score

const findAverageScore = (array) => {
  let scoreTotal = 0;
  for (let submission of array) {
    scoreTotal += submission.score;
  }
  let averageScore = scoreTotal / array.length;
  return Math.round(averageScore);
};

console.log(`Average Score: ${findAverageScore(submissions)}`);

////// 9. Filter objects for new array of passing grades

const filterPassing = (array) => {
  let passingGrades = array.filter(function (person) {
    return person.score >= 60;
  });
  return passingGrades;
};

console.log(filterPassing(submissions));

////// 10. Filter objects that score 90 or above

const filter90AndAbove = (array) => {
  let aboveOr90 = array.filter(function (person) {
    return person.score >= 90;
  });
  return aboveOr90;
};

console.log(filter90AndAbove(submissions));

////// EXTENDED CHALLENGES
//// 1. Create range between 2 numbers in new array

const createRange = (start, end) => {
  let newArray = [];
  for (let i = start; i <= end; i++) {
    newArray.push(i);
  }
  return newArray;
};

console.log(createRange(5, 20));

//// 2. Return object with array letters as keys & how many times they appear as values

const countElements = (array) => {
  let sorted = array.toLowerCase().replace(" ", "").split("").sort();
  let obj = {};
  sorted.forEach((letter) => {
    obj[letter] = (obj[letter] || 0) + 1;
  });
  return obj;
};

console.log(countElements("Hell World"));
