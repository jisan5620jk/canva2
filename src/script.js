//Calender

const calendarDays2 = document.getElementById('calendar-days2');
const month2 = document.getElementById('month2');
const year2 = document.getElementById('year2');
const prevButton2 = document.getElementById('prev2');
const nextButton2 = document.getElementById('next2');

let date2 = new Date();
let currentMonth2 = date2.getMonth();
let currentYear2 = date2.getFullYear();

const months2 = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function renderCalendar2() {
  date2.setDate(1);
  const firstDayIndex2 = date2.getDay() - 1;
  const lastDay2 = new Date(currentYear2, currentMonth2 + 1, 0).getDate();
  const prevLastDay2 = new Date(currentYear2, currentMonth2, 0).getDate();
  const nextDays2 = 7 - new Date(currentYear2, currentMonth2 + 1, 0).getDay();

  month2.innerHTML = `${months2[currentMonth2]}`;
  year2.innerHTML = `${currentYear2}`;

  let days2 = '';

  for (let x2 = firstDayIndex2; x2 > 0; x2--) {
    days2 += `<div class="prev-date">${prevLastDay2 - x2 + 1}</div>`;
  }

  for (let i2 = 1; i2 <= lastDay2; i2++) {
    if (
      i2 === new Date().getDate() &&
      currentMonth2 === new Date().getMonth() &&
      currentYear2 === new Date().getFullYear()
    ) {
      days2 += `<div class="today">${i2}</div>`;
    } else {
      days2 += `<div>${i2}</div>`;
    }
  }

  for (let j2 = 1; j2 <= nextDays2; j2++) {
    days2 += `<div class="next-date">${j2}</div>`;
  }

  calendarDays2.innerHTML = days2;
}

prevButton2.addEventListener('click', () => {
  currentMonth2--;
  if (currentMonth2 < 0) {
    currentMonth2 = 11;
    currentYear2--;
  }
  date2.setMonth(currentMonth2);
  date2.setFullYear(currentYear2);
  renderCalendar2();
});

nextButton2.addEventListener('click', () => {
  currentMonth2++;
  if (currentMonth2 > 11) {
    currentMonth2 = 0;
    currentYear2++;
  }
  date2.setMonth(currentMonth2);
  date2.setFullYear(currentYear2);
  renderCalendar2();
});

renderCalendar2();

/* Tab Calendar Month */


//Time Button Active

document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.querySelectorAll('.time-btn button, .time-btn button');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      buttons.forEach(function (btn) {
        btn.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});

/* Custom Time Zone Select */

document.getElementById('timezone').addEventListener('change', function () {
  const selectedTimeZone = this.value;
  displayCurrentTime(selectedTimeZone);
});

function displayCurrentTime(timeZone) {
  const now = new Date();
  const utcOffset = parseInt(timeZone.split('UTC')[1].split(':')[0]);
  const localTime = new Date(now.getTime() + utcOffset * 60 * 60 * 1000);
  const formattedTime = localTime.toISOString().slice(0, 19).replace('T', ' ');
  document.getElementById(
    'current-time'
  ).innerText = `Current Time: ${formattedTime} (UTC${
    utcOffset >= 0 ? '+' : ''
  }${utcOffset}:00)`;
}

/* Calendar Tab */

document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab-btn');
  const all_content = document.querySelectorAll('.tab-content');

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (tab) {
        tab.classList.remove('active');
      });
      tab.classList.add('active');

      all_content.forEach(function (content) {
        content.classList.remove('active');
      });
      all_content[index].classList.add('active');
    });
  });
});


/* Mobile Calendar */

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const monthYear = document.getElementById('monthYear');
    const dates = document.getElementById('dates');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    let currentDate = new Date();
    let currentWeekStart = new Date(
      currentDate.setDate(currentDate.getDate() - currentDate.getDay())
    );

    function renderCalendar() {
      const year = currentWeekStart.getFullYear();
      const month = currentWeekStart.getMonth();
      const weekStart = new Date(currentWeekStart);
      const weekEnd = new Date(currentWeekStart);
      weekEnd.setDate(weekEnd.getDate() + 6);

      monthYear.textContent = `${weekStart.toLocaleDateString('en-US', {
        month: 'long',
      })} ${year}`;

      dates.innerHTML = '';
      for (let i = 0; i < 7; i++) {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + i);
        dates.innerHTML += `<div class="text-center rounded-full font-Poppins flex items-center justify-center relative ${
          date.toDateString() === new Date().toDateString()
            ? 'today-date text-white bg-PrimaryColor-0'
            : ''
        }">${date.getDate()} <span class="absolute -top-1 -right-1 size-[18px] bg-white rounded-full flex items-center justify-center text-green-500 text-sm border-2 border-white opacity-0"><i class="fa-solid fa-circle-check"></i></span></div>`;
      }
    }

    prev.addEventListener('click', () => {
      currentWeekStart.setDate(currentWeekStart.getDate() - 7);
      renderCalendar();
    });

    next.addEventListener('click', () => {
      currentWeekStart.setDate(currentWeekStart.getDate() + 7);
      renderCalendar();
    });

    renderCalendar();
  });
})();
