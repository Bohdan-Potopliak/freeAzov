import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  messageSize: '16px',
  messageLineHeight: '24px',
  position: 'topRight',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
});

export function showWarning(message) {
  iziToast.show({
    message: message,
    backgroundColor: '#0039d1',
    messageColor: '#fafafa',
    maxWidth: '280',
    position: 'topCenter',
  });
}

export function showError(message) {
  iziToast.show({
    message: message,
    backgroundColor: '#f2ff00',
    messageColor: '#2e2f42',
  });
}
