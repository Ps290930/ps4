const todoList = () => {
    all = [];
  
    const add = (todoItem) => {
      all.push(todoItem);
    };
  
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const compareDate = (date) =>
      new Date(date) - new Date(formattedDate(new Date()));
  
    const overdue = () =>
      all.filter((todo) => compareDate(todo.dueDate) < 0 && !todo.completed);
  
    const dueToday = () => all.filter((todo) => compareDate(todo.dueDate) === 0);
  
    const dueLater = () => all.filter((todo) => compareDate(todo.dueDate) > 0);
  
    const toDisplayableList = (list) =>
      list.map((todo) => {
        const checkbox = todo.completed ? "[x]" : "[ ]";
        const displayDate = compareDate(todo.dueDate) === 0 ? "" : todo.dueDate;
        return `${checkbox} ${todo.title} ${displayDate}`;
      }).join("\n");
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
module.exports = todoList;