import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startButton = document.querySelector('[data-start]');
startButton.setAttribute('disabled', false);
let timerLine = null;
const input = document.querySelector('#datetime-picker');
const timerRef = document.querySelector('.timer');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timerLine = selectedDates[0].getTime();
    if (timerLine < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startButton.setAttribute('disabled', true);
    } else {
        startButton.toggleAttribute('disabled');
    }
  },
};
flatpickr('#datetime-picker', options);

function onButton() {
  timer.start(timerRef, timerLine);
  input.setAttribute('disabled', true);
  startButton.setAttribute('disabled', true);
}

const timer = {
  intervalId: null,
  refs: {},
  start(rootSelector) {
    this.getRefs(rootSelector);
    this.intervalId = setInterval(() => {
      const ms = timerLine - Date.now();

      if (ms <= 0) {
        return;
        clearInterval(intervalId)
      }

      const data = this.convertMs(ms);
      this.refs.days.textContent = this.addLeadinZero(data.days);
      this.refs.hours.textContent = this.addLeadinZero(data.hours);
      this.refs.minutes.textContent = this.addLeadinZero(data.minutes);
      this.refs.seconds.textContent = this.addLeadinZero(data.seconds);
    }, 1000);
  },
  getRefs(rootSelector) {
    this.refs.days = rootSelector.querySelector('[data-days]');
    this.refs.hours = rootSelector.querySelector('[data-hours]');
    this.refs.minutes = rootSelector.querySelector('[data-minutes]');
    this.refs.seconds = rootSelector.querySelector('[data-seconds]');
  },

  convertMs(ms) {
    const days = Math.floor(ms / 1000 / 60 / 60 / 24);
    const hours = Math.floor(ms / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(ms / 1000 / 60) % 60;
    const seconds = Math.floor(ms / 1000) % 60;
    return { days, hours, minutes, seconds };
  },
  addLeadinZero(value) {
    return String(value).padStart(2, '0');
  },
};
startButton.addEventListener('click', onButton);