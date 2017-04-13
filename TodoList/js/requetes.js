export const getTodoList = function(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/todos');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE && xhr.status >= 200 && xhr.status < 300) {
      const todos = JSON.parse(xhr.responseText);

      cb(todos);
    }
  };
  xhr.send();
};

export const supprimerTodo = function(id, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `http://localhost:3000/todos/${id}`);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE && xhr.status >= 200 && xhr.status < 300) {
      cb();
    }
  };
  xhr.send();
};

export const postTodo = function(contactObj, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/todos');
  xhr.setRequestHeader('Content-type', 'application/json'); // MIME Type
  xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE && xhr.status >= 200 && xhr.status < 300) {
      const newTodo = JSON.parse(xhr.responseText);
      cb(newTodo);
    }
  };
  xhr.send(JSON.stringify(contactObj));
};