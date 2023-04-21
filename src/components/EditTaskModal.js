import { useState } from 'react';

import './UI/Modal.css';
import classes from './TaskModal.module.css';
import closeX from './UI/icons/close.svg';
import Button from './UI/Button';

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.onClick} />;
};

const EditTaskModal = (props) => {
  // get user inputs
  const [newTitle, setNewTitle] = useState(props.taskObj.title);
  const [newDescription, setNewDescription] = useState(
    props.taskObj.description
  );
  const [newOption, setNewOption] = useState(props.taskObj.status);
  const [newDate, setNewDate] = useState(props.taskObj.date);

  const titleHandler = (event) => {
    setNewTitle(event.target.value);
  };
  const descriptionHandler = (event) => {
    setNewDescription(event.target.value);
  };

  const selectStat = (event) => {
    setNewOption(event.target.value);
  };

  const selectDate = (event) => {
    setNewDate(event.target.value);
  };

  const convertDate = new Date(newDate).toJSON();

  const newTaskObj = {
    username: props.taskObj.username,
    _id: props.taskObj['_id'],
    title: newTitle,
    description: newDescription,
    status: newOption,
    due_date: convertDate,
  };

  // edit new task
  const submitNewTask = (event) => {
    event.preventDefault();

    fetch('https://servering.jayraval20.repl.co/task', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTaskObj),
    }).then(() => {
      props.update();
      props.onClick();
    });
  };

  return (
    <>
      <Backdrop onClick={props.onClick} />
      <div className='modal'>
        <img
          onClick={props.onClick}
          className='close'
          src={closeX}
          alt='X to close this modal'
        />
        <form onSubmit={submitNewTask}>
          <label>Title</label>
          <input
            type='text'
            placeholder='Enter a title'
            value={newTitle}
            onChange={titleHandler}
          />
          <label>Description</label>
          <textarea
            className={classes.description}
            type='text'
            placeholder='Enter a short description of your task'
            value={newDescription}
            onChange={descriptionHandler}
          />
          <label>Status</label>
          <select
            defaultValue={newOption}
            className={classes.status}
            onChange={selectStat}
          >
            <option value='DEFAULT' disabled hidden>
              Choose a status
            </option>
            <option value='Not Started'>Not Started</option>
            <option value='In Progress'>In Progress</option>
            <option value='On Hold'>On Hold</option>
            <option value='Complete'>Complete</option>
          </select>
          <label>Due Date</label>
          <input
            className={classes.date}
            type='date'
            onChange={selectDate}
            value={newDate}
          />
          <div className={classes.save}>
            <Button>Save</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditTaskModal;
