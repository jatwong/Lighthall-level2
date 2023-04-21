import Button from './UI/Button';
import './UI/Modal.css';
import classes from './ConfirmDeleteModal.module.css';
import closeX from './UI/icons/close.svg';
import { useState } from 'react';

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.onClick} />;
};

const ConfirmDeleteModal = (props) => {
  const [done, setDone] = useState(false);
  const [message, setMessage] = useState('');

  // delete task
  const approveDelete = async () => {
    try {
      const response = await fetch(
        'https://servering.jayraval20.repl.co/task',
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ _id: props.taskId }),
        }
      );
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.log(error);
    }
    setDone(true);
    props.update();
  };

  
  let confirmation = '';
  if (!done) {
    confirmation = (
      <>
        <p>
          Are you sure you want to delete this task? <br />
          (This action cannot be undone)
        </p>
        <div className={classes.spacing}>
          <Button onClick={approveDelete}>Yes</Button>
          <Button onClick={props.onClick}>No</Button>
        </div>
      </>
    );
  } else {
    confirmation = (
      <>
      {message}
      <Button className={classes.close} onClick={props.onClick}>Close</Button>
      </>
      );
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
        {confirmation}
      </div>
    </>
  );
};

export default ConfirmDeleteModal;
