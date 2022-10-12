
//Adding a global variable that can be used throughout the project
//with local storage
//the name input is set to store to the local storage
// e is to parse though an event
window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const newTask = document.querySelector('#new-task'); 

    const username = localStorage.getItem('username') || '';

    nameInput.value = username;

    nameInput.addEventListener('change', e => {
        localStorage.setItem('username', e.target.value);
    })

    //getting the JSON code

    newTask.addEventListener('submit', e => {
        e.preventDefault();

        const todo={
            content: e.target.elements.content.value,
            category:e.target.elements.category.value,
            done: false,

        }
        todos.push(todo);

        localStorage.setItem('todos', JSON.stringify(todos));

        e.target.reset();
    })

})

