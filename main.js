const peopleArray = [
  {
    name: "Victoria",
    gender: "female",
  },
  {
    name: "Chisom",
    gender: "male",
  },
  {
    name: "Success",
    gender: "male",
  },
  {
    name: "Chimere",
    gender: "male",
  },
  {
    name: "Chris",
    gender: "male",
  },
  {
    name: "Favour",
    gender: "female",
  },
];

// const result = peopleArray.forEach((person, index) => {
//   console.log(person, index);
// });

// const result = peopleArray.map((person, index) => {
//   return {
//     ...person,
//     type: index % 2 === 0 ? "even" : "odd",
//   };
// });

// const result = peopleArray.filter((person) => {
//   return !(person.gender === "female");
// });

// const result = peopleArray.some((person) => {
//   return person.gender === "female";
// });

const result = peopleArray.every((person) => {
  return person.gender.includes("female");
});

console.log(result);
