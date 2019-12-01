// function showTodo(todo: { title: string, text: string }) {
//   console.log(todo.title + ': ' + todo.text);
// }

// let myTodo = { title: 'Trash', text: 'Take out trash' }

// showTodo(myTodo);



interface Todo {
  title: string;
  text: string;
}

function showTodo2(todo: Todo) {
  console.log(todo.title + ': ' + todo.text);
}

let myTodo2 = { title: 'Trash', text: 'Take out trash' }

showTodo2(myTodo2);