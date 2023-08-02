const subjects = ['Math', 'Science', 'History', 'English', 'Math', 'Art', 'Physics', 'Math', 'Biology'];

const mathSubjects = subjects.filter(function (subject) {
  if (subject === 'Math') {
    return subject;
  }
});

console.log(mathSubjects);
