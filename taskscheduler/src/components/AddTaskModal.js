import { useState } from 'react';

import './UI/Modal.css';
import classes from './TaskModal.module.css';
import closeX from './UI/icons/close.svg';
import Button from './UI/Button';

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.onClick} />;
};

const AddTaskModal = (props) => {
  // get user inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [option, setOption] = useState('');
  const [date, setDate] = useState('');

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const selectStat = (event) => {
    setOption(event.target.value);
  };

  const selectDate = (event) => {
    setDate(event.target.value);
  };

  // add new task
  const submitNewTask = (event) => {
    event.preventDefault();

    fetch(
      'https://servering.jayraval20.repl.co/task',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: props.username,
          title: title,
          description: description,
          status: option,
          due_date: date,
        }),
      }
    );

    props.onClick()
  }

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
            value={title}
            onChange={titleHandler}
          />
          <label>Description</label>
          <textarea
            className={classes.description}
            type='text'
            placeholder='Enter a short description of your task'
            value={description}
            onChange={descriptionHandler}
          />
          <label>Status</label>
          <select
            defaultValue={'DEFAULT'}
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
          <input className={classes.date} type='date' onChange={selectDate} />
          <div className={classes.save}>
            <Button>Save</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTaskModal;
