let input = document.getElementById('input');
let btn = document.getElementById('button');
let tasks = document.getElementById('ul');
//let task = document.querySelector('li');

function createTask() {
    let task = document.createElement('li');
    task.textContent = input.value;
    tasks.append(task);
    input.value = '';
}

list.addEventListener('click', function (evt) {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('line-through');
    }
});

btn.getElementById('button').addEventListener('click', createTask);








