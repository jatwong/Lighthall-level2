import { useEffect } from 'react';
import classes from './AllTasksList.module.css';
import Button from '../UI/Button';
import TaskCard from '../TaskCard';
import Header from '../UI/Header';

const AllTasksList = () => {
  let taskList = [];

  const getAllTasks = () => {
    fetch(
      'https://lighthall2-task-tracker-server.hemanth-ks97.repl.co/signup',
      {
        method: 'POST',
        body: JSON.stringify({
          username: 'Mary',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => {
      if (res.status === 200) {
        return res.json().then((data) => {
          console.log('data', data);
          for (const task of data) {
            const taskObj = {
              username: task.username,
              task_id: task.task_id,
              description: task.description,
              title: task.title,
              date: task.due_date,
              status: task.status,
            };

            taskList.push(taskObj);
          }
        });
      }
    });
  };

  useEffect(() => {
    getAllTasks();
  });

  let entry = [
    {
      user: 'Mary',
      title: 'read books',
      description: 'read 5 books harry potter',
      status: 'In Progress',
      date: '04/23/2023',
    },
    {
      user: 'Mary',
      title: 'cook lunch',
      description: 'prepare fod',
      status: 'Completed',
      date: '04/23/2023',
    },
  ];

  return (
    <><Header />
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
        {console.log('here', taskList)}
        <TaskCard
          title={entry[0].title}
          description={entry[0].description}
          status={entry[0].status}
          date={entry[0].date}
        />
        <TaskCard
          title={entry[1].title}
          description={entry[1].description}
          status={entry[1].status}
          date={entry[1].date}
        />

        <p className={`${classes.card} ${classes.addTask}`}>+ Add a new task</p>
        <Button onClick={getAllTasks} />
      </div>
    </>
  );
};

export default AllTasksList;
