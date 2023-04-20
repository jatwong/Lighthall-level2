import { useState, useEffect } from 'react';
import classes from './AllTasksList.module.css';
import TaskCard from '../UI/TaskCard';
import AddTaskModal from '../AddTaskModal';
import ConfirmDeleteModal from '../ConfirmDeleteModal';
import EditTaskModal from '../EditTaskModal';

const AllTasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [taskItem, setTaskItem] = useState({});
  const [taskId, setTaskId] = useState("");

  const user = 'Kevin';

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const response = await fetch(
          'https://servering.jayraval20.repl.co/signup',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              // TODO: get username from login
              username: user,
            }),
          }
        );
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        // set error message?
        console.log('Error!', error);
      }
    };

    getAllTasks();
  });

  // handles show/hiding Add Task modal
  const closeAddTask = () => {
    setShowAddTask(false);
  };
  const addTask = () => {
    setShowAddTask(true);
  };

  // handles show/hiding Delete Task modal
  const closeDeleteTask = () => {
    setShowDelete(false);
  };
  const deleteTask = (id) => {
    setTaskId(id);
    setShowDelete(true);
  };

  // handles show/hiding Edit Task modal
  const closeEditTask = () => {
    setShowEdit(false);
  };
  const editTask = (taskObj) => {
    setTaskItem(taskObj);
    setShowEdit(true);
  };

  return (
    <>
      {showEdit && <EditTaskModal onClick={closeEditTask} taskObj={taskItem} />}
      {showDelete && (
        <ConfirmDeleteModal onClick={closeDeleteTask} taskId={taskId} />
      )}
      {showAddTask && <AddTaskModal onClick={closeAddTask} username={user} />}
      <div className={classes.page}>
        <div className={classes.heading}>
          <table className={classes.list}>
            <tbody>
              <tr>
                <th>Title</th>
                <th colSpan='3'>Description</th>
                <th>Status</th>
                <th>Due Date</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            username={user}
            id={task._id}
            title={task.title}
            description={task.description}
            status={task.status}
            date={task.due_date}
            confirmDelete={deleteTask}
            editTask={editTask}
          />
        ))}
        <p className={`${classes.card} ${classes.addTask}`} onClick={addTask}>
          + Add a new task
        </p>
      </div>
    </>
  );
};

export default AllTasksList;
