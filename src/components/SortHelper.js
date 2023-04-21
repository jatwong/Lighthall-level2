export const sortDateAsc = (taskObj) => {
  return taskObj.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));
};

export const sortDateDesc = (taskObj) => {
  return taskObj.sort((a, b) => new Date(b.due_date) - new Date(a.due_date));
};

export const sortStatusAsc = (taskObj) => {
  return taskObj.sort((a, b) => {
    if (a.status < b.status) {
      return -1;
    }
    return 0;
  });
};

export const sortStatusDesc = (taskObj) => {
  return taskObj.sort((a, b) => {
    if (a.status > b.status) {
      return -1;
    }
    return 0;
  });
};
export const sortTitleAsc = (taskObj) => {
  return taskObj.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
};

export const sortTitleDesc = (taskObj) => {
  return taskObj.sort((a, b) => {
    if (a.title > b.title) {
      return -1;
    }
    return 0;
  });
};
