import deleteIcon from './UI/icons/delete.svg';
import * as badge from './UI/Status';

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
    case 'Completed':
      status = <badge.COMPLETE />;
      break;
    default:
      break;
  }

  return (
    <div className='card'>
      <table className='list'>
        <tbody>
          <tr>
            <td>{props.title}</td>
            <td colSpan='3'>{props.description}</td>
            <td className='status'>{status}</td>
            <td>{props.date}</td>
            <td>
              <img
                className='icon'
                src={deleteIcon}
                alt='trashcan icon to delete'
              ></img>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskCard;
