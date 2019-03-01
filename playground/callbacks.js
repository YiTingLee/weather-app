const getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Eric'
  }

  setTimeout(() => callback(user), 3000);
};

getUser(31, user => {
  console.log(user);
});
