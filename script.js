const form = document.querySelector("form");
const successMessage = document.querySelector("#successMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (email === "") {
        alert("Please enter your email");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return;
    }

    if (message === "") {
        alert("Please enter your message");
        return;
    }

    successMessage.textContent = "Form submitted successfully!";
    form.reset();
});
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

document.getElementById("addTask").onclick = function() {
    
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
li.textContent = task;

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.onclick = function() {
    li.remove();
};
li.appendChild(deleteButton);

taskList.appendChild(li);
}; 