import Button from './UI/Button';
import './UI/Modal.css';
import classes from './ConfirmDeleteModal.module.css';
import closeX from './UI/icons/close.svg';

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.onClick} />;
};

const ConfirmDeleteModal = (props) => {
  // delete task
  const approveDelete = () => {

    fetch('https://servering.jayraval20.repl.co/task', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props.taskId),
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
        <p>
          Are you sure you want to delete this task? <br />
          (This action cannot be undone)
        </p>
        <div className={classes.spacing}>
          <Button onClick={approveDelete}>Yes</Button>
          <Button onClick={props.onClick}>No</Button>
        </div>
      </div>
    </>
  );
};

export default ConfirmDeleteModal;
