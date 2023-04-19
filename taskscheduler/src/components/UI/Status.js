import './Status.css';

export const NOT_STARTED = () => {
  return (
    <div className='notStarted badge'>
      Not Started
    </div>
  );
};

export const IN_PROGRESS = () => {
    return (
        <div className='inProgress badge'>
          In Progress
        </div>
      );
};

export const COMPLETE = () => {
    return (
        <div className='complete badge'>
          Complete
        </div>
      );
};

export const ON_HOLD = () => {
    return (
        <div className='onHold badge'>
          On Hold
        </div>
      );
};
