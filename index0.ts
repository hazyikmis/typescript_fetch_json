import axios from 'axios';

const url1 = `https://jsonplaceholder.typicode.com/todos/6`;
const url2 = `https://jsonplaceholder.typicode.com/todos/7`;

axios.get(url1).then((response) => {
  console.log(response.data);
});

axios.get(url2).then((response) => {
  const todo = response.data;

  const ID = todo.ID;
  const title = todo.title;
  const finished = todo.finished;

  const str = `
    The todo with ID: ${ID} has a title of: ${title}
    Is it finished? ${finished}
  `;

  console.log(str);
});
