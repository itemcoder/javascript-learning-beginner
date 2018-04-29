document.addEventListener('DOMContentLoaded', function(e) {


    // Remove task from task list

    const taskList = document.querySelector("#task-list");

    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('done')) {
            let li = e.target.parentElement;
            li.parentElement.removeChild(li);
        }
    });

    const addForm = document.forms['add-task-form'];

    addForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let task = addForm.querySelector('input[name="task"]').value;
        if (task) {
            // Create DOM Element

            let li = document.createElement('li');
            let taskName = document.createElement('span');
            let doneBtn = document.createElement('span');

            // assign content
            taskName.textContent = task;
            doneBtn.textContent = "done";

            // Add class
            li.classList.add("list-group-item");
            taskName.classList.add("task-name");
            doneBtn.classList.add("done", "btn", "btn-primary", "float-right");

            // append child
            li.appendChild(taskName);
            li.appendChild(doneBtn);
            taskList.appendChild(li);

            addForm.reset();
        } else {
            alert("Please add your task");
            addForm.querySelector("input").focus();
        }

    });

    // Change event

    const check = document.querySelector("#hide-task-list");

    check.addEventListener('change', function(e) {
        if (check.checked) {
            taskList.style.display = "none";
        } else {
            taskList.style.display = "block";
        }
    });

    const searchInput = document.forms['search-form'].querySelector("input");

    searchInput.addEventListener('keyup', function(e) {
        let s = e.target.value.toLowerCase();
        let taks = taskList.querySelectorAll("li .task-name");
        taks.forEach(function(task) {
            let taskContent = task.textContent.toLowerCase();
            if (taskContent.indexOf(s) != -1) {
                task.parentElement.style.display = "block";
            } else {
                task.parentElement.style.display = "none";
            }
        });
    });

});