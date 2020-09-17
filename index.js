"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url1 = "https://jsonplaceholder.typicode.com/todos/6";
var url2 = "https://jsonplaceholder.typicode.com/todos/7";
axios_1["default"].get(url1).then(function (response) {
    console.log(response.data);
});
axios_1["default"].get(url2).then(function (response) {
    //const todo = response.data;
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    // const str = `
    //   The todo with ID: ${id} has a title of: ${title}
    //   Is it finished? ${completed}
    // `;
    // console.log(str);
    //logTodo(id, completed, title);
    logTodo(id, title, completed);
});
//const logTodo = (id, title, completed) => {
var logTodo = function (id, title, completed) {
    var str = "\n    The todo with ID: " + id + " has a title of: " + title + "\n    Is it finished? " + completed + "\n  ";
    console.log(str);
};
