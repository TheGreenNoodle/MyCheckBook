const date = new Date();

// used to get the number of days in a month
const moment = require("moment");

// starts out on the current date as the default value
class DateBuilder {
  constructor(
    month = date.getMonth() + 1,
    day = date.getDate(),
    fullYear = date.getFullYear()
  ) {
    this.month = month;
    this.day = day;
    this.fullYear = fullYear;
  }

  decrementMonth() {
    this.month--;
  }
  decrementDay() {
    this.day--;
  }
  decrementYear() {
    this.fullYear--;
  }

  // decides if the day or month is not double digit and it adds a 0 on the front of those strings if they aren't
  getCurrDate() {
    let month = this.month;
    let day = this.day;

    if (this.month < 10) month = `0${month}`;
    if (this.day < 10) day = `0${day}`;

    return `${month}/${day}/${this.fullYear}`;
  }

  resetMonth() {
    this.month = 12;
  }

  // reset day to what ever the last day of what ever month it is
  setDayToEndOfMonth() {
    this.day = moment(
      `${this.fullYear}-${this.month}`,
      "YYYY-MM"
    ).daysInMonth();
  }
}

export { DateBuilder };
