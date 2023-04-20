import { useState, useEffect } from 'react';
import classes from './AllTasksList.module.css';
import TaskCard from '../UI/TaskCard';
import AddTaskModal from '../AddTaskModal';
import ConfirmDeleteModal from '../ConfirmDeleteModal';
import EditTaskModal from '../EditTaskModal';
import * as Sorter from '../SortHelper';

const AllTasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [taskItem, setTaskItem] = useState({});
  const [taskId, setTaskId] = useState('');
  const [sortBy, setSortBy] = useState('Date ASC');

  const user = 'Mary';

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

        // sort to date asc
        data.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));
        setTasks(data);
      } catch (error) {
        // set error message?
        console.log('Error!', error);
      }
    };

    getAllTasks();
  }, []);

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

  // selects & sorts the tasks
  const selectSort = (event) => {
    setSortBy(event.target.value);
  };

  const refresh = async () => {
    console.log('refresh...')
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
      getSortedTasks();
    } catch (error) {
      // set error message?
      console.log('Error!', error);
    }
  };

  const getSortedTasks = () => {
    let sorted = {};
    switch (sortBy) {
      case 'Date ASC':
        sorted = Sorter.sortDateAsc(tasks);
        break;
      case 'Date DESC':
        sorted = Sorter.sortDateDesc(tasks);
        break;
      case 'Status ASC':
        sorted = Sorter.sortStatusAsc(tasks);
        break;
      case 'Status DESC':
        sorted = Sorter.sortStatusDesc(tasks);
        break;
      case 'Title ASC':
        sorted = Sorter.sortTitleAsc(tasks);
        break;
      case 'Title DESC':
        sorted = Sorter.sortTitleDesc(tasks);
        break;
    }
    return sorted;
  };

  return (
    <>
      {showEdit && <EditTaskModal onClick={closeEditTask} taskObj={taskItem} update={refresh}/>}
      {showDelete && (
        <ConfirmDeleteModal onClick={closeDeleteTask} taskId={taskId} update={refresh} />
      )}
      {showAddTask && <AddTaskModal onClick={closeAddTask} username={user} update={refresh}/>}
      <div className={classes.page}>
        <div className={classes.sort}>
          <label>Sort by</label>
          <select onChange={selectSort} defaultValue={'Date ASC'}>
            <option value='Date ASC'>Due Date (ascending)</option>
            <option value='Date DESC'>Due Date (descending)</option>
            <option value='Status ASC'>Status (ascending)</option>
            <option value='Status DESC'>Status (descending)</option>
            <option value='Title ASC'>Title (ascending)</option>
            <option value='Title DESC'>Title (descending)</option>
          </select>
        </div>
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
        {getSortedTasks().map((task) => (
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
