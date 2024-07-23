import React from "react"
export const questions = [
  {
    questionText: "What is the correct place to insert the JavaScript ?",
    answerOptions: [
      { answerText: "The <head> section", isCorrect: false },
      { answerText: "The <body> section", isCorrect: false },
      {
        answerText: "Both the <head> and <body> section are correct.",
        isCorrect: true
      }
    ]
  },
  {
    questionText: "How can you add a comment in a JavaScript?",
    answerOptions: [
      { answerText: "* This is a comment *", isCorrect: false },
      { answerText: " //This is a comment", isCorrect: true },
      { answerText: "<!-- This is a comment -->", isCorrect: false }
    ]
  },
  {
    questionText: "How can you detect the client's browser name?",
    answerOptions: [
      { answerText: "navigator.appName", isCorrect: true },
      { answerText: "browser.name", isCorrect: false },
      { answerText: "client.navName", isCorrect: false }
    ]
  },
  {
    questionText: "is JavaScript case- sensitive ?",
    answerOptions: [
      { answerText: "NO", isCorrect: false },
      { answerText: "YES", isCorrect: true }
    ]
  },
  {
    questionText: "What is the output of the Math.pow(5,2) ?",
    answerOptions: [
      { answerText: "10", isCorrect: false },
      { answerText: "2.5", isCorrect: false },
      { answerText: "25", isCorrect: true }
    ]
  },
  {
    questionText: "What is the usage of unshift method ?",
    answerOptions: [
      {
        answerText: "To remove the element from the beginning",
        isCorrect: false
      },

      { answerText: "To add new element at beginning", isCorrect: true },
      { answerText: "To add the element at the end", isCorrect: false }
    ]
  },
  {
    questionText: ` What is output of 
    console.log(NaN == NaN)
    `,
    answerOptions: [
      { answerText: "NaN", isCorrect: false },
      { answerText: "false", isCorrect: true },
      { answerText: "true", isCorrect: false }
    ]
  },
  {
    questionText: "How do you find the min of 2 numbers ?",
    answerOptions: [
      { answerText: "Math.min(x,y)", isCorrect: true },
      { answerText: "Min(x,y)", isCorrect: false },
      { answerText: "Maths.min(x,y)", isCorrect: false }
    ]
  },
  {
    questionText:
      "Which of the following is a server-side Java Script object ?",
    answerOptions: [
      { answerText: "function", isCorrect: false },
      { answerText: "File", isCorrect: true },
      { answerText: "Date", isCorrect: false }
    ]
  },
  {
    questionText:
      "Which of the following is not a valid JavaScript variable name?",
    answerOptions: [
      { answerText: "2variable", isCorrect: false },
      { answerText: "_variable", isCorrect: false },
      { answerText: "variable5", isCorrect: true }
    ]
  }
];
