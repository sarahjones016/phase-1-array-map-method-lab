const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(helperFunction)
}


function helperFunction (tut) {
  //split the strings into arrays of strings
  tut = tut.split(" ")
  // FOR loop: Making changes to the individual words. Capitilizing the first letter, and combining that with the rest of the word (unchanged)
  for (let i = 0; i < tut.length; i++) {
  tut[i] = tut[i].charAt(0).toUpperCase()+ tut[i].slice(1); 
  }
  //Combining all the changed words back together
  return tut.join(' ');
}