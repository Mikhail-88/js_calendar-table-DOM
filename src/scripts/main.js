'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const mon = month - 1;
  const days = new Date(year, mon);

  let table = `<table><tr><th>Пн</th><th>Вт</th><th>Ср</th>
    <th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr><tr>`;

  function getDay(date) {
    let day = date.getDay();

    if (day === 0) {
      day = 7;
    }

    return day - 1;
  }

  for (let i = 0; i < getDay(days); i++) {
    table += `<td></td>`;
  }

  while (days.getMonth() === mon) {
    table += `<td>${days.getDate()}</td>`;

    if (getDay(days) % 7 === 6) {
      table += `</tr><tr>`;
    }

    days.setDate(days.getDate() + 1);
  }

  if (getDay(days) !== 0) {
    for (let i = getDay(days); i < 7; i++) {
      table += `<td></td>`;
    }
  }

  table += `</tr></table>`;

  element.innerHTML = table;
}

calendarTable(2019, 11, calendar);
