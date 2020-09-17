import axios from 'axios';

const url1 = `https://jsonplaceholder.typicode.com/todos/6`;
const url2 = `https://jsonplaceholder.typicode.com/todos/7`;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url1).then((response) => {
  console.log(response.data);
});

axios.get(url2).then((response) => {
  //const todo = response.data;
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  // const str = `
  //   The todo with ID: ${id} has a title of: ${title}
  //   Is it finished? ${completed}
  // `;

  // console.log(str);
  //logTodo(id, completed, title);
  logTodo(id, title, completed);
});

//const logTodo = (id, title, completed) => {
const logTodo = (id: number, title: string, completed: boolean) => {
  const str = `
    The todo with ID: ${id} has a title of: ${title}
    Is it finished? ${completed}
  `;

  console.log(str);
};

//If we compile & build this file with "tsc index.ts" command, then "index.js" file
//automatically produced. And then we need to execute it by "node index.js".
//But if we try with "ts-node index.ts", this file executed without producing "index.js"
