// let subjectsHash = {
//   1: "javascript",
//   2: "html",
//   3: "css",
//   4: "java",
//   5: "rust",
// };

// let students = [
//   { id: 1, name: "parteekh", subjectid: 5 },
//   { id: 2, name: "yogesh", subjectid: 2 },
//   { id: 3, name: "narpul", subjectid: 4 },
//   { id: 4, name: "parteekh", subjectid: 1 },
// ];

// students.forEach(student => {
//   console.log(`Name: ${student.name}, Student ID: ${student.id}`);
// });

// let studentSubjectMap = students.map(student => ({
//   id: student.id,
//   name: student.name,
//   subject: subjectsHash[student.subjectid]
// }));
// console.log(studentSubjectMap);






// let parteekMarksdata = {
//   name: "parteek",
//   subject1: "javascript",
//   subject2: "html",
//   subject3: "css",
//   subject4: null,
//   subject5: null,
//   marks1: 90,
//   marks2: 81,
//   marks3: 80,
//   marks4: null,
//   marks5: null,
// };

// let nurupulMarksdata = {
//   name: "nurupul",
//   subject1: "java",
//   subject2: "python",
//   subject3: null,
//   subject4: null,
//   subject5: null,
//   marks1: 95,
//   marks2: 85,
//   marks3: null,
//   marks4: null,
//   marks5: null,
// };

// let allstudentsmarksdata = [parteekMarksdata, nurupulMarksdata];

// function transformStudentData(studentData) {
//   let transformedData = [];

//   studentData.forEach(student => {
//     let studentObj = {
//       name: student.name,
//       marks: []
//     };

//     // Iterate over the subjects and marks
//     for (let i = 1; i <= 5; i++) {
//       let subjectKey = `subject${i}`;
//       let marksKey = `marks${i}`;
      
//       // Only include non-null subjects and marks
//       if (student[subjectKey] && student[marksKey] !== null) {
//         studentObj.marks.push({
//           subject: student[subjectKey],
//           score: student[marksKey]
//         });
//       }
//     }

//     transformedData.push(studentObj);
//   });

//   return transformedData;
// }

// let result = transformStudentData(allstudentsmarksdata);

// console.log(result);



// const voters = [
//     { name: "bob", age: 30, voted: "true" },
//     { name: "jake", age: 32, voted: "true" },
//     { name: "kate", age: 25, voted: "false" },
//     { name: "sam", age: 20, voted: "false" },
//     { name: "phil", age: 21, voted: "true" },
//     { name: "ed", age: 55, voted: "true" },
//     { name: "tami", age: 54, voted: "true" },
//     { name: "mary", age: 31, voted: "false" },
//     { name: "backy", age: 43, voted: "false" },
//     { name: "joy", age: 41, voted: "true" },
//     { name: "zeaif", age: 30, voted: "true" },
//     { name: "zack", age: 19, voted: "" }
//   ];
  
//   const result = {
//     numYoungVote: 0,      
//     numYoungPeople: 2,    
//     numMidVotePeople: 5,  
//     numMidsPeople: 8,     
//     numOldVotePeople: 2,  
//     numOldsPeople: 2      
//   };
  
//   voters.forEach(voter => {
//     if (voter.age >= 19 && voter.age <= 29) {
//       result.numYoungPeople++;
//       if (voter.voted === "true") {
//         result.numYoungVote++;
//       }
//     } else if (voter.age >= 30 && voter.age <= 39) {
//       result.numMidsPeople++;
//       if (voter.voted === "true") {
//         result.numMidVotePeople++;
//       }
//     } else if (voter.age >= 40) {
//       result.numOldsPeople++;
//       if (voter.voted === "true") {
//         result.numOldVotePeople++;
//       }
//     }
//   });
  
//   console.log(result);
  
// function UniqueString(strings) {
//     return strings.reduce((acc, string) => {
//         acc[string] = (acc[string] || 0) + 1; // Fix the variable name
//         return acc;
//     }, {});
// }

// const strings = [
//     "apple",
//     "banana",
//     "apple",
//     "orange",
//     "banana",
//     "pear",
//     "apple"
// ];

// const result = UniqueString(strings);
// console.log(result);


// function productOfMultiplicationOfThreeOrFive(numbers) {
//     return numbers.reduce(
//         (acc, num) => (num % 3 === 0 || num % 5 === 0 ? acc * num : acc), 
//         1 // Initial value for multiplication, starting from 1
//     );
// }

// const numbers = [17, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
// console.log(productOfMultiplicationOfThreeOrFive(numbers));

// function palindromStrings(words) {
//     return words.filter((word) => word === word.split("").reverse().join(""));
//   }
  
//   const words = [
//     "racecar",
//     "hello",
//     "defined",
//     "world",
//     "level",
//     "programing",
//     "civic",
//     "javascript",
//   ];
  
//   console.log(palindromStrings(words));
  
// function swapstrings(strings) {
//     return strings.map((string) =>
//         string.length > 1 
//         ? string[string.length - 1] + string.slice(1, -1) + string[0] 
//         : string
//     );
// }

// const stringsswap = [
//     "hello",
//     "world",
//     "this",
//     "is",
//     "an",
//     "example",
//     "array",
//     "of",
//     "strings"
// ];

// const swappedStrings = swapstrings(stringsswap);

// console.log(swappedStrings);


// function countWords(sentences) {
//     sentences.forEach((sentence, index) => {
//         // Split sentence into words by space and filter out empty strings
//         const words = sentence.split(" ").filter(word => word.trim() !== "");
        
//         console.log(`Sentence ${index + 1} contains ${words.length} words.`);
//     });
// }

// const sentences = [
//     "the quick brown fox jumps over the lazy dogs.",
//     "she sells buy the some grapes",
//     "i have a dream this day this nation is rise up",
//     "to be or not to be that is the question",
//     "in the beginning god created the heavens and the earth"
// ];

// countWords(sentences);
