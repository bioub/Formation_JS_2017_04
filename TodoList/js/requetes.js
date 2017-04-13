export const getContactList = function(cb) {
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