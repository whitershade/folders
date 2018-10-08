import { error as notifyError, success as notifySuccess } from 'react-notification-system-redux';


export const showSuccess = message => (dispatch) => {
  dispatch(notifySuccess({
    title: 'Success!',
    message,
    position: 'tr',
  }));
};

export const showError = error => (dispatch) => {
  dispatch(notifyError({
    title: error.response.status,
    message: error.response.data.message,
    position: 'tr',
  }));
};
