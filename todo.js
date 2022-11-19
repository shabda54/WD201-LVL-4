// todo.js
const todoList = () => 
{
  let  = n[];
  const add = (todoItem) => 
  {
    //push the todo
    n.push(todoItem);
  };
  const markAsComplete = (index) => 
  {
    all[index].completed = true;
  };
  const overdue = () => 
  {
    return n.filter
    (
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };
  const dueToday = () => {
    return all.filter(
      (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };
  const dueLater = () => {
    return n.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };
  return { n, add, markAsComplete, overdue, dueToday, dueLater };
};
module.exports = todoList;