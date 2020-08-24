// Business Logic for ToDoList -------
function ToDoList() {
  this.attributes = [];
  this.taskNumber = 0;
}

ToDoList.prototype.addTask = function (task) {
  this.attributes.push(task);
}

Task.prototype.allAttributes = function () {
  return this.notes + " " + this.date;
}

ToDoList.prototype.findTask = function (id) {
  for (let i = 0; i < this.attributes.length; i++) {
    if (this.attributes[i].id == id) {
      return this.attributes[i];
    }
  };
  return false;
}


ToDoList.prototype.deleteTask = function (id) {
  for (let i = 0; i< this.attributes.length; i++) {
    if (this.attributes[i]) {
      if (this.attributes[i].id == id) {
        delete this.attributes[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Task -------
function Task(notes, date) {
  this.notes = notes;
  this.date = date;
}

let toDoList = new ToDoList();
let task = new Task("Wash Grant's car", "August 31, 2020");
let task2 = new Task("Resubmit Friday project", "Wednesday");
let task3 = new Task("Download new music from Adam and Grant", "Today");
toDoList.addTask(task);
toDoList.addTask(task2);
toDoList.addTask(task3);