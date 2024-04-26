document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-todo');
    const inputField = document.getElementById('todo-input');
    const todosContainer = document.querySelector('.todo');

    addButton.addEventListener('click', () => {
        if (inputField.value.trim() !== "") {
            const newTodo = createTodoItem(inputField.value);
            todosContainer.appendChild(newTodo);
            inputField.value = ''; // Очистка поля ввода после добавления задачи
        }
    });

    function createTodoItem(text) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo__item');
    
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('todo__checkbox');
    
        const todoText = document.createElement('input');
        todoText.type = 'text';
        todoText.classList.add('todo__text');
        todoText.value = text;
    
        const dateSpan = document.createElement('span');
        dateSpan.classList.add('todo__date');
        dateSpan.textContent = getCurrentDateTime(); // Устанавливаем текущую дату и время
    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('todo__button', 'todo__button--delete');
        deleteButton.onclick = function() {
            todoItem.remove();
        };
    
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                todoText.classList.add('todo__text--completed');
            } else {
                todoText.classList.remove('todo__text--completed');
            }
        });
    
        const itemRight = document.createElement('div');
        itemRight.classList.add('todo__item-right');
        itemRight.appendChild(dateSpan);
        itemRight.appendChild(deleteButton);
    
        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoText);
        todoItem.appendChild(itemRight);
    
        return todoItem;
    }
    
});
document.addEventListener('DOMContentLoaded', () => {
    const deleteAllButton = document.getElementById('delete-all');
    const deleteLastButton = document.getElementById('delete-last');

    deleteAllButton.addEventListener('click', () => {
        const todos = document.querySelectorAll('.todo__item');
        todos.forEach(todo => todo.remove());
    });

    deleteLastButton.addEventListener('click', () => {
        const todos = document.querySelectorAll('.todo__item');
        if (todos.length > 0) {
            todos[todos.length - 1].remove();
        }
    });
});

/*Фильтрация задач*/
document.addEventListener('DOMContentLoaded', () => {
    const showAllButton = document.getElementById('show-all');
    const showCompletedButton = document.getElementById('show-completed');

    showAllButton.addEventListener('click', () => {
        const todos = document.querySelectorAll('.todo__item');
        todos.forEach(todo => todo.style.display = 'flex');
    });

    showCompletedButton.addEventListener('click', () => {
        const todos = document.querySelectorAll('.todo__item');
        todos.forEach(todo => {
            if (todo.querySelector('input[type="checkbox"]').checked) {
                todo.style.display = 'flex';
            } else {
                todo.style.display = 'none';
            }
        });
    });
});

/*Поиск*/
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-todo');

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const todos = document.querySelectorAll('.todo__item');

        todos.forEach(todo => {
            const text = todo.querySelector('.todo__text').value.toLowerCase();
            if (text.includes(filter)) {
                todo.style.display = 'flex';
            } else {
                todo.style.display = 'none';
            }
        });
    });
});

/*Статистика*/
function updateStats() {
    const totalCount = document.querySelectorAll('.todo__item').length;
    const completedCount = document.querySelectorAll('.todo__item input[type="checkbox"]:checked').length;
    
    document.getElementById('count-all').textContent = `Total: ${totalCount}`;
    document.getElementById('count-completed').textContent = `Completed: ${completedCount}`;
}

const observer = new MutationObserver(() => {
    updateStats(); 
});

document.addEventListener('DOMContentLoaded', () => {
    const todoContainer = document.querySelector('.todo');

    observer.observe(todoContainer, {
        childList: true, 
        subtree: true, 
    });

    
    todoContainer.addEventListener('change', updateStats);
});
function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString(); // Например, "4/3/2023, 11:20:35 AM"
}