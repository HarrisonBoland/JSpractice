// function solution(A) {
//   for (let i = 1; i < 9999999999; i++) {
//     if (!A.includes(i)) {
//       return i
//     }
//   }
// }

// console.log(solution([2,3,4]))

var users = [];
app.post('/users', function (req, res) {
  console.log('POST');
  if (!req.body) {
    res.status(400).send({ success: false });
  } else {
    let user = req.body;
    users.push(user);
    console.log('users', users);
    res.status(201).send({ success: true });
  }
});
