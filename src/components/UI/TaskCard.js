import deleteIcon from './icons/delete.svg';
import * as badge from './Status';

import './TaskCard.css';

const TaskCard = (props) => {
  let status;

  switch (props.status) {
    case 'Not Started':
      status = <badge.NOT_STARTED />;
      break;
    case 'In Progress':
      status = <badge.IN_PROGRESS />;
      break;
    case 'On Hold':
      status = <badge.ON_HOLD />;
      break;
    case 'Complete':
      status = <badge.COMPLETE />;
      break;
    default:
      break;
  }

  const dueDate = new Date(props.date);
  const month = (dueDate.getMonth()) + 1;
  const day = (dueDate.getDate()) + 1;
  const year = dueDate.getFullYear();
  const transformDate = `${month}/${day}/${year}`;

  let monthStr = String(month);
  let dayStr = String(day);
  if (day < 10) {
    dayStr = "0" + dayStr
}
  if (month < 10) {
    monthStr = "0" + monthStr
  }

  const taskObj = {
    username: props.username,
    _id: props.id,
    title: props.title,
    description: props.description,
    status: props.status,
    date: `${year}-${monthStr}-${dayStr}`,
  };

  const makeEdits = () => {
    props.editTask(taskObj);
  };

  const optDelete = (event) => {
    event.stopPropagation();
    props.confirmDelete(props.id);
  }

  return (
    <>
      <div className='card' onClick={makeEdits}>
        <table className='list'>
          <tbody>
            <tr>
              <td>{props.title}</td>
              <td colSpan='3'>{props.description}</td>
              <td className='status'>{status}</td>
              <td>{transformDate}</td>
              <td>
                <img
                  className='icon'
                  src={deleteIcon}
                  alt='trashcan icon to delete'
                  onClick={optDelete}
                ></img>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskCard;
